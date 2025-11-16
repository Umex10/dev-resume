 export const handleLenisScroll = (e: React.MouseEvent, target: string) => {
      e.preventDefault();

  const isMobile = window.innerWidth < 768;
  const HEADER_OFFSET = isMobile ? 30 : 73;

  // Home: ALWAYS scroll to 0px
  if (target === "#home") {
    window.lenis?.scrollTo(0, { duration: 1.2 });
    return;
  }

  // Other Sections: offset included
  window.lenis?.scrollTo(target, {
    offset: -HEADER_OFFSET,
    duration: 1.2,
  });
  };