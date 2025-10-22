"use client";

import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

// Types and Utilities
import { mockSuggestedGames, mockInitialComments, mockGames } from '../../../types/mockData';

// Components
import { HeroSection, StickyNavigationBar, SidePanelGameDetails, LogoHeader, MobileLanguageSwitcher } from '@/app/component/GameDetails/navigation';
import { LinksSection, DownloadsSection, CommentsSection, SuggestedGamesSection } from '@/app/component/GameDetails/moreSections';
import { useLanguageStore } from '@/app/zustand/uselangStore';
import { useLanguageFont } from '@/app/hook/langFontUtils';
import { useTranslations } from '@/app/hook/gameDetails/hooks';
import { DownloadModal, TrailerModal } from '@/app/component/GameDetails/modals';
import { Game } from '@/app/types/Game';
import { AboutSection, DeveloperSection, TrailerSection } from '@/app/component/GameDetails/sections';

// Download data


interface GameDetailsLayoutProps {
    game?: Game;
}

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
const [dislikedComments, setDislikedComments] = useState<Set<string>>(new Set());
    const suggestedGames = mockSuggestedGames;

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

    // ✅ استفاده از useMemo برای جلوگیری از re-render بیهوده
    const t = useMemo(() => useTranslations(lang, 0), [lang]);
    const tWithLang = useMemo(() => ({ ...t, lang, setLang }), [t, lang, setLang]);

    // Comment handlers
    const handleSubmitComment = useCallback(() => {
        setCommentError('');

        if (!newComment.trim()) {
            setCommentError('Please enter a comment');
            return;
        }

        if (newComment.trim().length < 5) {
            setCommentError('Comment must be at least 5 characters');
            return;
        }

        if (newRating === 0) {
            setCommentError('Please select a rating');
            return;
        }

        // ایجاد کامنت جدید
        const newCommentObj = {
            id: Date.now().toString(),
            author: lang === 'fa' ? 'کاربر جدید' : 'New User',
            text: newComment,
            date: new Date(),
            likes: 0,
            rating: newRating
        };

        // بروزرسانی state
        setComments(prevComments => {
            const updatedComments = [newCommentObj, ...prevComments];
            console.log('New comment added:', newCommentObj);
            console.log('Total comments:', updatedComments.length);
            return updatedComments;
        });

        // پاک کردن input
        setNewComment('');
        setNewRating(0);
        setHoverRating(0);

        // Scroll to comments section
        setTimeout(() => {
            const commentsSection = document.getElementById('comments');
            if (commentsSection) {
                commentsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    }, [newComment, newRating, lang]);

const handleLikeComment = useCallback((id: string) => {
    const wasLiked = likedComments.has(id);
    const wasDisliked = dislikedComments.has(id);

    setComments(prevComments =>
        prevComments.map(comment => {
            if (comment.id === id) {
                let newLikes = comment.likes;
                let newDislikes = comment.dislikes || 0;

                if (wasLiked) {
                    // Remove like
                    newLikes--;
                } else {
                    // Add like
                    newLikes++;
                    // If was disliked, remove dislike
                    if (wasDisliked) {
                        newDislikes--;
                    }
                }

                return {
                    ...comment,
                    likes: newLikes,
                    dislikes: newDislikes
                };
            }
            return comment;
        })
    );

    // Update liked state
    setLikedComments(prev => {
        const newSet = new Set(prev);
        if (wasLiked) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        return newSet;
    });

    // Remove from disliked if was disliked
    if (wasDisliked) {
        setDislikedComments(prev => {
            const newSet = new Set(prev);
            newSet.delete(id);
            return newSet;
        });
    }
}, [likedComments, dislikedComments]);

const handleDislikeComment = useCallback((id: string) => {
    const wasLiked = likedComments.has(id);
    const wasDisliked = dislikedComments.has(id);

    setComments(prevComments =>
        prevComments.map(comment => {
            if (comment.id === id) {
                let newLikes = comment.likes;
                let newDislikes = comment.dislikes || 0;

                if (wasDisliked) {
                    // Remove dislike
                    newDislikes--;
                } else {
                    // Add dislike
                    newDislikes++;
                    // If was liked, remove like
                    if (wasLiked) {
                        newLikes--;
                    }
                }

                return {
                    ...comment,
                    likes: newLikes,
                    dislikes: newDislikes
                };
            }
            return comment;
        })
    );

    // Update disliked state
    setDislikedComments(prev => {
        const newSet = new Set(prev);
        if (wasDisliked) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        return newSet;
    });

    // Remove from liked if was liked
    if (wasLiked) {
        setLikedComments(prev => {
            const newSet = new Set(prev);
            newSet.delete(id);
            return newSet;
        });
    }
}, [likedComments, dislikedComments]);

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
    }, []);
    return (
        <motion.div
            className={twMerge(`min-h-screen ${fontClass} text-white`)}
            dir={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <LogoHeader />
            <MobileLanguageSwitcher lang={lang} setLang={setLang} direction={direction} />
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
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 md:p-12 pt-10">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <AboutSection game={game} lang={lang} sectionRef={sectionRefs.about} />
                    <DeveloperSection game={game} lang={lang} direction={direction} sectionRef={sectionRefs.developer} />
                    <TrailerSection game={game} lang={lang} sectionRef={sectionRefs.trailer} onPlayTrailer={() => setIsTrailerModalOpen(true)} />
                    <LinksSection game={game} lang={lang} sectionRef={sectionRefs['link-section']} direction={direction} />
                   <CommentsSection
    comments={comments}
    newComment={newComment}
    newRating={newRating}
    hoverRating={hoverRating}
    commentError={commentError}
    dislikedComments={dislikedComments}
    likedComments={likedComments}
    lang={lang}
    direction={direction}
    sectionRef={sectionRefs.comments}
    onCommentChange={setNewComment}
    onRatingChange={setNewRating}
    onHoverRatingChange={setHoverRating}
    onCommentSubmit={handleSubmitComment}
    onCommentLike={handleLikeComment}
    onCommentDislike={handleDislikeComment} 
/>
                    <SuggestedGamesSection suggestedGames={suggestedGames} lang={lang} direction={direction} sectionRef={sectionRefs.suggested} />
                </div>

                {/* Side Panel */}
                <SidePanelGameDetails game={game} lang={lang} direction={direction} scrollToSection={scrollToSection} />
            </div>

            {/* Modals */}
            <AnimatePresence>

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