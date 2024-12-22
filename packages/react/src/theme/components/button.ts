import type { ComponentStyle } from "../../core"
import {
  isAccessible,
  isGray,
  shadeColor,
  transparentizeColor,
} from "../../utils"

export const Button: ComponentStyle<"Button"> = {
  baseStyle: {
    cursor: "pointer",
    fontWeight: "semibold",
    transitionDuration: "slower",
    transitionProperty: "common",
    _disabled: {
      boxShadow: "none",
      cursor: "not-allowed",
      opacity: 0.4,
    },
    _focus: {
      outline: "none",
    },
    _hover: {
      _disabled: {
        bg: ["initial", "initial"],
      },
    },
    _readOnly: {
      cursor: "default",
      _ripple: {
        display: "none",
      },
    },
  },

  variants: {
    ghost: ({
      colorScheme: c = "gray",
      colorMode: m,
      errorBorderColor = ["danger.500", "danger.400"],
      theme: t,
    }) => ({
      bg: "transparent",
      color: isGray(c)
        ? ["blackAlpha.800", "whiteAlpha.700"]
        : [`${c}.600`, `${c}.500`],
      vars: [
        {
          name: "errorBorderColor",
          token: "colors",
          value: errorBorderColor,
        },
      ],
      _focusVisible: {
        borderColor: "transparent",
        boxShadow: "outline",
      },
      _hover: {
        bg: [`${c}.50`, transparentizeColor(`${c}.600`, 0.12)(t, m)],
      },
      _invalid: {
        border: "1px solid",
        borderColor: "$errorBorderColor",
        boxShadow: "0 0 0 1px $errorBorderColor",
      },
    }),
    link: ({ colorScheme: c = "gray" }) => ({
      color: [`${c}.600`, `${c}.500`],
      height: "auto",
      lineHeight: "normal",
      minW: "auto",
      padding: 0,
      verticalAlign: "baseline",
      _active: {
        color: [`${c}.700`, `${c}.600`],
        _disabled: {
          color: [`${c}.600`, `${c}.500`],
        },
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _hover: {
        textDecoration: "underline",
        _disabled: {
          textDecoration: "none",
        },
      },
      _ripple: {
        display: "none",
      },
    }),
    outline: ({
      colorScheme: c = "gray",
      colorMode: m,
      errorBorderColor = ["danger.500", "danger.400"],
      theme: t,
    }) => ({
      bg: "transparent",
      border: "1px solid",
      borderColor: [`${c}.600`, `${c}.500`],
      color: isGray(c)
        ? ["blackAlpha.800", "whiteAlpha.700"]
        : [`${c}.600`, `${c}.500`],
      vars: [
        {
          name: "errorBorderColor",
          token: "colors",
          value: errorBorderColor,
        },
      ],
      _focusVisible: {
        boxShadow: "outline",
        _invalid: {
          borderColor: "transparent",
        },
      },
      _hover: {
        bg: [`${c}.50`, transparentizeColor(`${c}.600`, 0.12)(t, m)],
      },
      _invalid: {
        borderColor: ["$errorBorderColor", "$errorBorderColor"],
        boxShadow: "0 0 0 1px $errorBorderColor",
      },
    }),
    solid: ({
      colorScheme: c = "gray",
      errorBorderColor = ["danger.500", "danger.400"],
    }) => ({
      bg: isGray(c)
        ? [`${c}.50`, `${c}.700`]
        : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
      color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
      vars: [
        {
          name: "errorBorderColor",
          token: "colors",
          value: errorBorderColor,
        },
      ],
      _focusVisible: {
        borderColor: "transparent",
        boxShadow: "outline",
      },
      _hover: {
        bg: isGray(c)
          ? [`${c}.100`, `${c}.800`]
          : [isAccessible(c) ? `${c}.500` : `${c}.600`, `${c}.700`],
        _disabled: {
          bg: isGray(c)
            ? [`${c}.50`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
        },
      },
      _invalid: {
        border: "1px solid",
        borderColor: "$errorBorderColor",
        boxShadow: "0 0 0 1px $errorBorderColor",
      },
    }),
    subtle: ({
      colorScheme: c = "gray",
      colorMode: m,
      errorBorderColor = ["danger.500", "danger.400"],
      theme: t,
    }) => ({
      bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
      color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
      vars: [
        {
          name: "errorBorderColor",
          token: "colors",
          value: errorBorderColor,
        },
      ],
      _focusVisible: {
        borderColor: "transparent",
        boxShadow: "outline",
      },
      _hover: {
        bg: [`${c}.100`, shadeColor(`${c}.300`, 56)(t, m)],
        _disabled: {
          bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
        },
      },
      _invalid: {
        border: "1px solid",
        borderColor: "$errorBorderColor",
        boxShadow: "0 0 0 1px $errorBorderColor",
      },
    }),
    surface: ({
      colorScheme: c = "gray",
      colorMode: m,
      errorBorderColor = ["danger.500", "danger.400"],
      theme: t,
    }) => ({
      bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
      border: "1px solid",
      borderColor: [`${c}.100`, shadeColor(`${c}.300`, 56)(t, m)],
      color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
      vars: [
        {
          name: "errorBorderColor",
          token: "colors",
          value: errorBorderColor,
        },
      ],
      _focusVisible: {
        borderColor: "transparent",
        boxShadow: "outline",
      },
      _hover: {
        bg: [`${c}.100`, shadeColor(`${c}.300`, 56)(t, m)],
        _disabled: {
          bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
        },
      },
      _invalid: {
        border: "1px solid",
        borderColor: "$errorBorderColor",
        boxShadow: "0 0 0 1px $errorBorderColor",
      },
    }),
    unstyled: {
      bg: "none",
      color: "inherit",
      display: "inline",
      lineHeight: "inherit",
      m: 0,
      p: 0,
      _ripple: {
        display: "none",
      },
    },
  },

  sizes: {
    xs: {
      fontSize: "xs",
      h: 6,
      lineHeight: "$sizes.6",
      minW: 6,
      px: 2,
      rounded: "sm",
    },
    sm: {
      fontSize: "sm",
      h: 8,
      lineHeight: "$sizes.8",
      minW: 8,
      px: 3,
      rounded: "md",
    },
    md: {
      fontSize: "md",
      h: 10,
      lineHeight: "$sizes.10",
      minW: 10,
      px: 4,
      rounded: "md",
    },
    lg: {
      fontSize: "lg",
      h: 12,
      lineHeight: "$sizes.12",
      minW: 12,
      px: 6,
      rounded: "md",
    },
    xl: {
      fontSize: "xl",
      h: 14,
      lineHeight: "$sizes.14",
      minW: 14,
      px: 8,
      rounded: "lg",
    },
    "2xl": {
      fontSize: "xl",
      h: 16,
      lineHeight: "$sizes.16",
      minW: 16,
      px: 10,
      rounded: "lg",
    },
  },

  defaultProps: {
    colorScheme: "gray",
    size: "md",
    variant: "solid",
  },
}