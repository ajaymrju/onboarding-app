import './App.css';
import Header from './components/Header';
import OnboardingForm from "./components/OnboardingForm"
import { createTheme, ThemeProvider } from '@mui/material';
import { color } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#664de5'
    },
    error: {
      main: '#ef5350'
    },

  },
  typography: {
    htmlFontSize: 14,
    fontFamily: 'Inter',
    fontWeightLight: 400,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: -2,
    },
    h4: {
      fontWeight: 600,
      fontSize: 32,
      letterSpacing: -1,
      [`@media screen and (max-width: 992px)`]: {
        fontSize: "28px"
      },
      [`@media screen and (max-width: 768px)`]: {
        fontSize: "21px"
      },
    },
    subtitle1: {
      fontSize: 14,
      color: '#9ea6b6',
      [`@media screen and (max-width: 768px)`]: {
        fontSize: "12px"
      },
    },
    subtitle2: {
      fontSize: 12,
      color: '#9ea6b6',
      fontWeight: 400,
    },
    body1: {
      fontSize: 14,
      lineHeight: '1.15',
    },
    body2: {
      fontSize: 12,
      lineHeight: '1.1'
    }
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {

          borderColor: '#664de5',

        },

      }
    },
    MuiButton: {
      defaultProps: {
        // The props to change the default for.

      },
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontSize: '14px',
          fontWeight: 400,
          padding: 14,
          lineHeight: '1.4'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          lineHeight: '1.2'
        },
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#eaeef5',
        },
        input: {
          padding: '14px',
          letterSpacing: '1',
        },
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: '1px solid',
          borderRadius: 6,
          borderColor: '#eaeef5',
          color: "#000000de",
          "&.Mui-selected": {
            borderColor: '#664de5 !important',
            backgroundColor: '#f8f9fc',
            ":hover": {
              backgroundColor: '#0000000a',
            }
          }
        },

      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          border: 'unset',
          borderRadius: 6,

        },
        grouped: {
          borderRadius: 6,
          ":not(:first-of-type)": {
            borderColor: '#eaeef5'
          }
        }

      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12,
        }
      }
    },
    MuiStepper: {

    },
    MuiStep: {
      styleOverrides: {
        root: {
          padding: 0,
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        iconContainer: {
          padding: 0,
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          width: 40,
          height: 40,
          color: 'transparent',
          border: '1px solid #eaeef5',
          borderRadius: '50%',
          "&.Mui-active .MuiStepIcon-text": {
            "fill": '#fff',
          }
        },
        text: {
          fontSize: '0.6rem',
          'fill': '#42474e',
        }
      },
    },

  },

})
function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <OnboardingForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
