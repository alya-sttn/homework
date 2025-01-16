
let intervalId;

document.querySelectorAll('.dropdown-toogle').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        const targetMenu = document.querySelector(`[data-target=${menu}]`);
        const pathMenu = document.querySelector(`[data-path=${menu}]`);
        const dropdownMenu = document.querySelectorAll('.dropdown-menu');
        dropdownMenu.forEach(e => {
            if (!targetMenu.classList.contains('open')) {
                e.classList.remove('menu-active');
                e.classList.remove('open');
                targetMenu.classList.add('menu-active');
                intervalId = setTimeout(() => {
                    targetMenu.classList.add('open');
                }, 0);
            }
            if (targetMenu.classList.contains('open')) {
                clearTimeout(intervalId);
                targetMenu.classList.remove('menu-active');
                intervalId = setTimeout(() => {
                    targetMenu.classList.remove('open');
                }, 0);
            }
            window.onclick = e => {
                if (e.target == targetMenu || e.target == pathMenu) {
                    return;
                } else {
                    targetMenu.classList.remove('menu-active');
                    targetMenu.classList.remove('open');
                }
            }
        });

    });
});


document.addEventListener('click', burgerInit)

function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 1100) return

    if (burgerIcon) {
        e.preventDefault()
    }

    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
    } else {
        document.body.classList.remove('body--opened-menu')
    }

}




const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpendItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpendContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        e.preventDefault()
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;
        if (accordionOpendItem && accordionItem != accordionOpendItem) {
            accordionOpendItem.classList.remove('accordion-list__item--opened')
            accordionOpendContent.style.maxHeight = null
        }
        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

        } else {
            accordionContent.style.maxHeight = null;
        }

    });
});

