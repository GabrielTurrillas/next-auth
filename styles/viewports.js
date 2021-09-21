export const widthSize = {
  mobileS: '320px',
  mobileM: '360px',
  mobileL: '480px',
  tablet: '960px',
  laptop: '1024px',
  laptopL: '1366px',
  desktop: '1920px',
}

const heightSize = {
  mobileS: '569px',
  mobileM: '640px',
  mobileL: '854px',
  tablet: '540px',
  laptop: '640px',
  laptopL: '768px',
  desktop: '1080px',
}

const widthSizeSB = {
  mobileS: '320px',
  mobileM: '360px',
  mobileL: '480px',
  tablet: '960px',
  laptop: '1023px',
  laptopL: '1365px',
  desktop: '1919px',
}

export const viewportsSizes = {
  mobileS: {
    name: 'mobileS',
    styles: {
      width: widthSize.mobileS,
      height: heightSize.mobileS,
    },
  },
  mobileM: {
    name: 'mobileM',
    styles: {
      width: widthSize.mobileM,
      height: heightSize.mobileM,
    },
  },
  mobileL: {
    name: 'mobileL',
    styles: {
      width: widthSize.mobileL,
      height: heightSize.mobileL,
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: widthSize.tablet,
      height: heightSize.tablet,
    },
  },
  laptop: {
    name: 'laptop',
    styles: {
      width: widthSize.laptop,
      height: heightSize.laptop,
    },
  },
  laptopL: {
    name: 'laptopL',
    styles: {
      width: widthSize.laptopL,
      height: heightSize.laptopL,
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: widthSize.desktop,
      height: heightSize.desktop,
    },
  },
};


export const device = {
  mobileS: `(min-width: ${widthSizeSB.mobileS})`,
  mobileM: `(min-width: ${widthSizeSB.mobileM})`,
  mobileL: `(min-width: ${widthSizeSB.mobileL})`,
  tablet: `(min-width: ${widthSizeSB.tablet})`,
  laptop: `(min-width: ${widthSizeSB.laptop})`,
  laptopL: `(min-width: ${widthSizeSB.laptopL})`,
  desktop: `(min-width: ${widthSizeSB.desktop})`,
};