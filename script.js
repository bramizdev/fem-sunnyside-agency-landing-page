'use strict';

const $ = (selector) => document.querySelector(selector);

const $mobileMenu = $('.header__navigation-links');
const $mobileMenuBtn = $('.header__navigation-menu');

const toggleAriaExpanded = (isExpanded) => {
  return isExpanded === 'true' ? 'false' : 'true';
};

$mobileMenuBtn.addEventListener('click', () => {
  $mobileMenu.classList.toggle('active');
  const isAriaExpanded = $mobileMenuBtn.getAttribute('aria-expanded');
  $mobileMenuBtn.setAttribute(
    'aria-expanded',
    toggleAriaExpanded(isAriaExpanded)
  );
});

$mobileMenu.addEventListener('click', (e) => {
  const click = e.target;
  if (!click.classList.contains('header__navigation-link')) return;
  $mobileMenu.classList.toggle('active');
  const isAriaExpanded = $mobileMenuBtn.getAttribute('aria-expanded');
  $mobileMenuBtn.setAttribute(
    'aria-expanded',
    toggleAriaExpanded(isAriaExpanded)
  );
});
