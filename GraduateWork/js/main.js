
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