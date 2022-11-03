/// <reference types="@sveltejs/kit" />

declare namespace App {

}

declare namespace svelte.JSX {
  interface HTMLAttributes<T extends HTMLButtonElement> {
    variant: string
  }
}

interface Theme {
  primary: {
    main: string
    contrastText: string
  }
  success: {
    main: string
    contrastText: string
  }
  warning: {
    main: string
    contrastText: string
  }
}

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer I>
    ? Array<DeepPartial<I>>
    : DeepPartial<T[P]>
}

module NodeJS {
  type Timeout = number
  type Timer = number

  interface process {
    env: {
      PROD: boolean
    }
  }
}
