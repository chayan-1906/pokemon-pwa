import {createTheme} from '@mui/material'

const primary = '#236291'
const secondary = '#A42AAE'
const error = '#DE4F4B'
const textColor = '#212529'
const textWhiteColor = '#EEEEEE'
const success = '#1A5D1A'
const warning = '#DE7A4B'
const info = '#4FAFF8'

const theme = createTheme({
    components: {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: '#E7E7E7',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: '#113a58',
                    },
                },
            },
            defaultProps: {
                disableRipple: true,
                // disableElevation: true,
            },
        },
        MuiChip: {
            defaultProps: {
                disableRipple: true,
                // disableElevation: true,
            },
        },
        MuiIconButton: {
            styleOverrides: {
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: 'red[500]',
                    },
                },
            },
        },
        MuiTab: {
            defaultProps: {
                disableRipple: true,
                // disableElevation: true,
            },
        },
        MuiListItemButton: {
            defaultProps: {
                disableRipple: true,
                // disableElevation: true,
            },
        }
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontWeight: 600,
        },
        h2: {
            fontWeight: 500,
        },
        h4: {
            fontWeight: 500,
        }
    },
    shape: {
        smallBorderRadius: '4px',
        largeBorderRadius: '8px',
    },
    palette: {
        primary: {
            '100': '#d2dee9',
            '200': '#bccede',
            '300': '#a7bed3',
            '400': '#91afc8',
            main: primary,
            '600': '#236291',
            '700': '#1d547d',
            '800': '#17476a',
            '900': '#113a58',
        },
        secondary: {
            main: secondary,
        },
        text: {
            primary: textColor,
            inverse: textWhiteColor,
        },
        grey: {
            '100': '#E7E7E7',
            '200': '#DCDCDC',
            '300': '#D7D7D7',
            '400': '#D2D2D2',
            '500': '#CDCDCD',
            '600': '#959595',
            '700': '#797979',
            '800': '#5D5D5D',
            '900': '#414141',
        },
        background: {
            default: '#FFFFFF',
        },
        success: {
            main: success,
        },
        warning: {
            main: warning,
        },
        info: {
            main: info,
        },
        error: {
            main: error,
        },
    },
})

export default theme