export const translations = (lang: string) => ({
  // Navigation
  dashboard: lang === 'fa' ? 'داشبورد' : 'Dashboard',
  overview: lang === 'fa' ? 'نمای کلی' : 'Overview',
  users: lang === 'fa' ? 'کاربران' : 'Users',
  comments: lang === 'fa' ? 'نظرات' : 'Comments',
  games: lang === 'fa' ? 'بازی‌ها' : 'Games',
  trending: lang === 'fa' ? 'ترند روز' : 'Trending',
  news: lang === 'fa' ? 'اخبار' : 'News',
  top10: lang === 'fa' ? '10 برتر' : 'Top 10',
  settings: lang === 'fa' ? 'تنظیمات' : 'Settings',
  
  // Stats
  totalUsers: lang === 'fa' ? 'کل کاربران' : 'Total Users',
  activeUsers: lang === 'fa' ? 'کاربران فعال' : 'Active Users',
  totalGames: lang === 'fa' ? 'کل بازی‌ها' : 'Total Games',
  pendingComments: lang === 'fa' ? 'نظرات در انتظار' : 'Pending Comments',
  
  // Common
  search: lang === 'fa' ? 'جستجو...' : 'Search...',
  filter: lang === 'fa' ? 'فیلتر' : 'Filter',
  export: lang === 'fa' ? 'خروجی' : 'Export',
  close: lang === 'fa' ? 'بستن' : 'Close',
  save: lang === 'fa' ? 'ذخیره' : 'Save',
  cancel: lang === 'fa' ? 'لغو' : 'Cancel',
  delete: lang === 'fa' ? 'حذف' : 'Delete',
  edit: lang === 'fa' ? 'ویرایش' : 'Edit',
  view: lang === 'fa' ? 'مشاهده' : 'View',
  add: lang === 'fa' ? 'افزودن' : 'Add',
  
  // Games
  gameManagement: lang === 'fa' ? 'مدیریت بازی‌ها' : 'Games Management',
  addNewGame: lang === 'fa' ? 'افزودن بازی جدید' : 'Add New Game',
  editGame: lang === 'fa' ? 'ویرایش بازی' : 'Edit Game',
  title: lang === 'fa' ? 'عنوان' : 'Title',
  developer: lang === 'fa' ? 'توسعه‌دهنده' : 'Developer',
  releaseDate: lang === 'fa' ? 'تاریخ انتشار' : 'Release Date',
  price: lang === 'fa' ? 'قیمت' : 'Price',
  status: lang === 'fa' ? 'وضعیت' : 'Status',
  actions: lang === 'fa' ? 'عملیات' : 'Actions',
  free: lang === 'fa' ? 'رایگان' : 'Free',
  discount: lang === 'fa' ? 'تخفیف' : 'Discount',
  regular: lang === 'fa' ? 'عادی' : 'Regular',
  
  // Form
  basicInfo: lang === 'fa' ? 'اطلاعات پایه' : 'Basic Information',
  description: lang === 'fa' ? 'توضیحات' : 'Description',
  media: lang === 'fa' ? 'رسانه' : 'Media',
  technical: lang === 'fa' ? 'فنی' : 'Technical',
  next: lang === 'fa' ? 'بعدی' : 'Next',
  previous: lang === 'fa' ? 'قبلی' : 'Previous',
  create: lang === 'fa' ? 'ایجاد' : 'Create',
  saveChanges: lang === 'fa' ? 'ذخیره تغییرات' : 'Save Changes',
  downloads: lang ==='fa' ? 'دانلود' : 'Download',
  // Users
  userManagement: lang === 'fa' ? 'مدیریت کاربران' : 'User Management',
  addUser: lang === 'fa' ? 'افزودن کاربر' : 'Add User',
  email: lang === 'fa' ? 'ایمیل' : 'Email',
  role: lang === 'fa' ? 'نقش' : 'Role',
  active: lang === 'fa' ? 'فعال' : 'Active',
  banned: lang === 'fa' ? 'مسدود' : 'Banned',
  
  // Comments
  commentManagement: lang === 'fa' ? 'مدیریت نظرات' : 'Comments Management',
  approve: lang === 'fa' ? 'تأیید' : 'Approve',
  reject: lang === 'fa' ? 'رد' : 'Reject',
  pending: lang === 'fa' ? 'در انتظار' : 'Pending',
  approved: lang === 'fa' ? 'تایید شده' : 'Approved',
  rejected: lang === 'fa' ? 'رد شده' : 'Rejected',
  all: lang === 'fa' ? 'همه' : 'All',
  viewDetails: lang === 'fa' ? 'مشاهده کامل' : 'View Details',
  
  // Overview
  dashboardOverview: lang === 'fa' ? 'نمای کلی داشبورد' : 'Dashboard Overview',
  realtime: lang === 'fa' ? 'زمان واقعی' : 'Real-time',
  vsLastMonth: lang === 'fa' ? 'نسبت به ماه قبل' : 'vs last month',
  userGrowthRevenue: lang === 'fa' ? 'رشد کاربران و درآمد' : 'User Growth & Revenue',
  platformDistribution: lang === 'fa' ? 'توزیع پلتفرم‌ها' : 'Platform Distribution',
  weeklyActivity: lang === 'fa' ? 'فعالیت هفتگی' : 'Weekly Activity',
  performance: lang === 'fa' ? 'عملکرد' : 'Performance',
  genreDistribution: lang === 'fa' ? 'توزیع ژانرها' : 'Genre Distribution',
  overallRating: lang === 'fa' ? 'امتیاز کلی' : 'Overall Rating',
  excellentPerformance: lang === 'fa' ? 'عملکرد عالی در ماه گذشته' : 'Excellent performance last month',
  userGrowth: lang === 'fa' ? 'رشد کاربران' : 'User Growth',
  highestInMonths: lang === 'fa' ? 'بیشترین رشد در 6 ماه اخیر' : 'Highest in 6 months',
  monthlyRevenue: lang === 'fa' ? 'درآمد ماهانه' : 'Monthly Revenue',
  increaseFromLast: lang === 'fa' ? 'افزایش 15.7% نسبت به ماه قبل' : '15.7% increase from last month',
  
  // Placeholder
  underDevelopment: lang === 'fa' ? 'این بخش در حال توسعه است' : 'This section is under development',
  comingSoon: lang === 'fa' ? 'به زودی' : 'Coming Soon',
loading: lang ==='fa' ? 'درحال بارگزاری' :'Loading',
  //days

});