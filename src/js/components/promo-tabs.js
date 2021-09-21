export const initPromoTabs = () => {
    const _promoTabs = document.querySelectorAll('.js-promo-tabs');

    const initViewPager = (viewPager) => {
        const navbar = viewPager.querySelector('.promo-tabs__tabs');
        const container = viewPager.querySelector('.promo-tabs__content');
        const tabs = navbar.querySelectorAll('.promo-tabs__btn-tab');
        const pages = container.querySelectorAll('.promo-slide');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', (e) => {
                const {currentTarget} = e;
                console.log(currentTarget);
                resetTabs();
                resetPages();
                tabs[index]?.classList.add('active');
                pages[index]?.classList.add('active');
            });
        });

        const resetPages = () => {
            pages.forEach((page) => page.classList.remove('active'));
        }

        const resetTabs = () => {
            tabs.forEach((page) => page.classList.remove('active'));
        }
    }


    _promoTabs.forEach((item) => {
        initViewPager(item);
    })
}
