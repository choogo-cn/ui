/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
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
