"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

// Types and Utilities
import {  mockSuggestedGames, mockInitialComments, mockGames } from '../../../types/mockData';

// Components

import { HeroSection, StickyNavigationBar, SidePanelGameDetails, LogoHeader, MobileLanguageSwitcher } from '@/app/component/GameDetails/navigation';
import { AboutSection, DeveloperSection, TrailerSection, RequirementsSection } from '@/app/component/GameDetails/sections';
import { LinksSection, DownloadsSection, CommentsSection, SuggestedGamesSection } from '@/app/component/GameDetails/moreSections';
import { useLanguageStore } from '@/app/zustand/uselangStore';
import { useLanguageFont } from '@/app/hook/langFontUtils';
import { useTranslations } from '@/app/hook/gameDetails/hooks';
import { DownloadModal, TrailerModal } from '@/app/component/GameDetails/modals';
import { Game } from '@/app/types/Game';

// Download data
const downloads = [
    { title: 'Direct Link (Half-Price)', url: "#download-link-1", size: "120 GB" },
    { title: 'Torrent Link', url: "#download-link-2", size: "120 GB" },
];

interface GameDetailsLayoutProps {
    game?: Game;
}

// FIX 1: Use first game from array as default instead of the entire array
const GameDetailsLayout: React.FC<GameDetailsLayoutProps> = ({ game = mockGames[0] }) => {
    const { lang, setLang } = useLanguageStore();
    const { fontClass, direction } = useLanguageFont(lang);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
    const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState('hero');
    const [comments, setComments] = useState(mockInitialComments(lang));
    const [newComment, setNewComment] = useState('');
    const [newRating, setNewRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [commentError, setCommentError] = useState('');
    const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

    const suggestedGames = mockSuggestedGames;

    // FIX 2: Add | null to ref type to match useRef<HTMLDivElement>(null) signature
    const sectionRefs = {
        hero: useRef<HTMLDivElement | null>(null),
        about: useRef<HTMLDivElement | null>(null),
        developer: useRef<HTMLDivElement | null>(null),
        trailer: useRef<HTMLDivElement | null>(null),
        requirements: useRef<HTMLDivElement | null>(null),
        'link-section': useRef<HTMLDivElement | null>(null),
        'downloads-section': useRef<HTMLDivElement | null>(null),
        comments: useRef<HTMLDivElement | null>(null),
        suggested: useRef<HTMLDivElement | null>(null),
    };

    const t = useTranslations(lang, comments.length);
    const tWithLang = { ...t, lang, setLang };

    // Comment handlers
    const handleSubmitComment = useCallback(() => {
        setCommentError('');
        if (!newComment.trim() || newComment.length < 10 || newRating === 0) {
            setCommentError(t.invalidComment);
            return;
        }
        const comment = {
            id: Date.now().toString(),
            author: lang === 'fa' ? 'کاربر جدید' : 'New User',
            text: newComment,
            date: new Date(),
            likes: 0,
            rating: newRating
        };
        setComments([comment, ...comments]);
        setNewComment('');
        setNewRating(0);
        setHoverRating(0);
    }, [newComment, newRating, comments, lang, t]);

    const handleLikeComment = useCallback((id: string) => {
        setComments(prevComments =>
            prevComments.map(comment =>
                comment.id === id
                    ? {
                        ...comment,
                        likes: likedComments.has(id) ? comment.likes - 1 : comment.likes + 1
                    }
                    : comment
            )
        );
        setLikedComments(prev =>
            new Set(
                likedComments.has(id)
                    ? Array.from(prev).filter(cid => cid !== id)
                    : [...Array.from(prev), id]
            )
        );
    }, [likedComments]);

    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const stickyNavHeight = window.innerWidth < 768 ? 120 : 65;
            const yOffset = -stickyNavHeight;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, []);

    // Intersection observer for active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
                        setCurrentSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -70% 0px',
                threshold: 0.15,
            }
        );

        Object.entries(sectionRefs).forEach(([id, ref]) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });
        return () => observer.disconnect();
    }, [lang]);

    return (
        <motion.div
            className={twMerge(`min-h-screen ${fontClass} text-white bg-zinc-950/95`)}
            dir={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* Header */}
            <LogoHeader />
            <MobileLanguageSwitcher lang={lang} setLang={setLang} direction={direction} />

            {/* Hero Section */}
            <HeroSection
                game={game}
                lang={lang}
                direction={direction}
                sectionRef={sectionRefs.hero}
                onDownloadClick={() => scrollToSection('downloads-section')}
                onTrailerClick={() => setIsTrailerModalOpen(true)}
            />

            {/* Sticky Navigation */}
            <StickyNavigationBar
                t={tWithLang}
                direction={direction}
                scrollToSection={scrollToSection}
                currentSection={currentSection}
            />

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 p-4 md:p-12 pt-10">

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-16">
                    <AboutSection game={game} lang={lang} sectionRef={sectionRefs.about} />
                    <DeveloperSection game={game} lang={lang} direction={direction} sectionRef={sectionRefs.developer} />
                    <TrailerSection game={game} lang={lang} sectionRef={sectionRefs.trailer} onPlayTrailer={() => setIsTrailerModalOpen(true)} />
                    <RequirementsSection lang={lang} direction={direction} sectionRef={sectionRefs.requirements} />
                    <LinksSection game={game} lang={lang} sectionRef={sectionRefs['link-section']} />
                    <DownloadsSection downloads={downloads} lang={lang} sectionRef={sectionRefs['downloads-section']} />
                    <CommentsSection
                        comments={comments}
                        newComment={newComment}
                        newRating={newRating}
                        hoverRating={hoverRating}
                        commentError={commentError}
                        likedComments={likedComments}
                        lang={lang}
                        direction={direction}
                        sectionRef={sectionRefs.comments}
                        onCommentChange={setNewComment}
                        onRatingChange={setNewRating}
                        onHoverRatingChange={setHoverRating}
                        onCommentSubmit={handleSubmitComment}
                        onCommentLike={handleLikeComment}
                    />
                    <SuggestedGamesSection suggestedGames={suggestedGames} lang={lang} direction={direction} sectionRef={sectionRefs.suggested} />
                </div>

                {/* Side Panel */}
                <SidePanelGameDetails game={game} lang={lang} direction={direction} scrollToSection={scrollToSection} />
            </div>

            {/* Modals */}
            <AnimatePresence>
                {isDownloadModalOpen && (
                    <DownloadModal
                        downloads={downloads}
                        onClose={() => setIsDownloadModalOpen(false)}
                        t={tWithLang}
                        direction={direction}
                    />
                )}
                {isTrailerModalOpen && game.trailerUrl && (
                    <TrailerModal
                        trailerUrl={game.trailerUrl}
                        onClose={() => setIsTrailerModalOpen(false)}
                        t={tWithLang}
                        direction={direction}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default GameDetailsLayout;