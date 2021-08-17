const WindowSize = {
    isMobile() {
      return document.body.clientWidth <= 480;
    },
  
    isTablet() {
      return document.body.clientWidth > 480 && document.body.clientWidth <= 800;
    },
  
    isDesktop() {
      return document.body.clientWidth > 800;
    },
  };
  
  export default WindowSize;