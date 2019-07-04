TweenMax.from(".derecha", 1.6, {
  delay: 1,
  // opacity: 0,
  // x: -20,
  width: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".logo", 1, {
  delay: 1,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});

TweenMax.from(".derecha", 1, {
  delay: 1.2,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});

TweenMax.from(".watch", 1, {
  delay: 1.4,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});

TweenMax.from(".next", 1, {
  delay: 1,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});

TweenMax.from(".carrito", 1, {
  delay: 1,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
});

TweenMax.from(".tituloProducto", 2, {
  delay: 1.6,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".descripcion", 2, {
  delay: 1.8,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from("#precio", 2, {
  delay: 2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".btn", 2, {
  delay: 2.2,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(
  ".sidebarDerecha ul li",
  1,
  {
    delay: 2.6,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
  },
  0.08
);

TweenMax.from(".abajoIzquierda", 2, {
  delay: 2.8,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(
  ".media ul li",
  1,
  {
    delay: 3.6,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
  },
  0.08
);

TweenMax.from(".producto img", 3, {
  delay: 2,
  scale: 0,
  ease: Expo.easeInOut
});

TweenMax.to(".producto img", 3, {
  delay: 2,
  // opacity: 0,
  // y: 20,
  scale: 1,
  ease: Expo.easeInOut
});
