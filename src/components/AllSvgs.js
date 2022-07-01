// svg as a react component

export const PowerBtn = (props) => {

    return(
        <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="power-off"
            className="svg-inline--fa fa-power-off fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
  >
            <path
            fill={props.fill}
            d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
            />
        </svg>
    )
}

export const Github = (props) => {
    return (
        <svg
          aria-hidden="true"
          data-prefix="fab"
          data-icon="github"
          className="prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          {...props}
        >
          <path
            fill={props.fill}
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          />
        </svg>
      )
}

export const Twitter = (props) => {
    return (
        <svg
          aria-hidden="true"
          data-prefix="fab"
          data-icon="twitter"
          className="prefix__svg-inline--fa prefix__fa-twitter prefix__fa-w-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          {...props}
        >
          <path
            fill={props.fill}
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          />
        </svg>
      )
}

export const Facebook = (props) => {
    return (
        <svg
          aria-hidden="true"
          data-prefix="fab"
          data-icon="facebook"
          className="prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          {...props}
        >
          <path
            fill={props.fill}
            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
          />
        </svg>
      )
}

export const YouTube = (props) => {
    return (
        <svg
          aria-hidden="true"
          data-prefix="fab"
          data-icon="youtube"
          className="prefix__svg-inline--fa prefix__fa-youtube prefix__fa-w-18"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          {...props}
        >
          <path
            fill={props.fill}
            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
          />
        </svg>
      )
}

export const YinYang = (props) => {
    return (
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="yin-yang"
          className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          {...props}
        >
          <path
            fill={props.fill}
            d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
          />
        </svg>
      )
}

export const Link = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="link"
      className="prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
      
    >
      <path
        fill={props.fill}
        
        d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
      />
    </svg>
  )
}


export const LinkedIn = (props) =>{
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={300}
            height={300}
            viewBox="0 0 225 225"
            {...props}
  >
            <path 
            fill={props.fill}            
            d="M23 87v87h61l2.3 3.8c1.3 2 7.5 13.2 13.8 24.9 6.3 11.7 11.6 21.3 11.9 21.3.3 0 6.6-11.2 14-24.8l13.5-24.7 31.2-.3 31.3-.2V0H23v87zm60.6-43.3c3.3 2.1 4.9 6.8 3.8 11-1.3 5.1-5.3 7.8-11.6 7.8-4.3 0-5.3-.4-7.9-3.3-9-10.1 4.2-23.1 15.7-15.5zm66.1 29.6c2.3 1.6 5.3 5.1 6.9 8l2.9 5.2.3 23.2.3 23.3H140v-16.8c-.1-20-.9-24.8-4.5-27.9-5.3-4.6-14.5-1.6-16.4 5.4-.6 2.1-1.1 11.8-1.1 21.5V133H98V71h20v8.4l3.3-3.4c4.8-4.9 8.1-6.1 16.8-5.8 6.4.3 8.2.7 11.6 3.1zm-62.9 28.4-.3 30.8-10.2.3-10.3.3V71h21l-.2 30.7z" />
  </svg>
    )
}

export const Telegram = (props) =>{
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={300}
            height={300}
            viewBox="0 0 225 225"
            {...props}
  >
            <path
            fill={props.fill}
            d="M97.5 1.1c-36.6 4.6-71.3 30.2-87 64.2-13.6 29.4-13.6 65 0 94.4 10.3 22.4 30.6 43 52.9 53.8 37.3 18.1 82.6 14 115.2-10.3 57-42.5 62.1-123.5 10.8-172.2C164.6 7.4 132-3.2 97.5 1.1zm69.3 68.1c.7.7 1.2 2.6 1.2 4.4 0 3.9-18.6 91.9-20 94.5-.7 1.3-2.1 1.9-4.3 1.9-2.6 0-6.3-2.2-17.4-10.5-7.8-5.8-14.5-10.5-14.9-10.5-.4 0-4.4 3.4-8.9 7.5-5.8 5.2-9.1 7.5-10.9 7.5-2.4 0-2.7-.8-6.6-13.3-2.2-7.2-4.9-15.4-5.8-18.1l-1.7-4.9-14.5-4.6c-8-2.5-15.1-5-15.8-5.4-2.6-1.7-1.3-4.7 3.1-6.8 9.9-4.7 109.5-42.7 112.3-42.8 1.6-.1 3.5.4 4.2 1.1z" />
  </svg>
    )
}

export const Unity = (props) =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={389.333}
      height={400}
      viewBox="0 0 292 300"
      {...props}
    >
      <path d="M199.5 16.1c-32.4 8.7-59.1 16.2-59.3 16.6-.1.5-4 7.3-8.5 15.3l-8.2 14.5-18.2.3-18.1.2-43.6 43.3L0 149.5l43.8 43.8L87.5 237h18l18 .1 8.5 15c5 9 9.3 15.4 10.5 15.9 5.1 1.9 115.7 31.1 116.7 30.8.6-.2 8.3-26.9 17-59.3l15.8-58.9-9.1-15.3-9.1-15.4 9.1-15.4 9-15.3-6.3-23.9C282 82.2 275.5 57.8 271 41 260.7 2.5 260 0 259.2.1c-.4.1-27.2 7.3-59.7 16zm16.8 30.1c-.4.7-12.1 20.9-25.9 44.8l-25.2 43.5-52.2.3-52.2.2 13-13.7c7.2-7.6 22-22.7 33-33.6l19.9-19.9 42-10.8c23.1-5.9 42.9-11 43.9-11.3 3.5-.9 4.5-.7 3.7.5zm39.6 60 12.2 43.6-12.1 43.4c-6.6 23.8-12.4 44.1-12.8 45.1-.5 1.3-7.2-9.5-26.2-42.4-14-24.3-25.6-44.7-25.8-45.5-.5-2.1 51-90.7 51.8-89.2.4.7 6.2 20.9 12.9 45zM191.1 210c14.2 24.4 25.7 44.6 25.6 44.7-.3.2-89.8-22.7-90.7-23.2-.4-.2-15.2-15.3-33-33.5l-32.3-33 52.4.2 52.3.3 25.7 44.5z" />
    </svg>
  )
}

export const Py = (props) =>{
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1200}
    height={693.333}
    viewBox="0 0 900 520"
    {...props}
  >
    <path d="M433.8 15c-36.3 3.1-71.1 13.2-91.3 26.6-5.1 3.4-5.2 3.6-6.4 10.2-1.9 11.3-3.1 29.7-3.1 50.9V123h141v11.7l-105.3.6c-106.4.7-110.4.8-120.7 4.5-42.6 15.1-64.1 76.3-49 139.8 10 42.2 37.6 74.3 74.2 86.4 7.4 2.4 22.3 5 29 5 5.5 0 5 1 6.8-14 2-15.7 6.7-42 9.5-53.1 8.5-32.9 26.8-49.3 60.8-54.3 12.5-1.9 36.1-2 75.4-.5 31.6 1.2 47.9.3 63.5-3.5 18.4-4.6 25.2-9.9 33-25.7 12-24.3 17.4-57.4 16.5-100.4-.9-39.4-6.2-62.6-17.3-76.2-10.4-12.7-32.6-22.4-60.9-26.8-12.3-1.9-41.3-2.7-55.7-1.5zm-35.3 33.5c10.2 5 15.9 14.3 15.9 26-.1 15.9-11.2 27.8-27.1 29.2-20.5 1.8-36.6-19.7-29.3-39.1 6.3-16.7 24.5-24 40.5-16.1z" />
    <path d="M587.6 144.7c-.3 2.1-.8 6.7-1.1 10.3-1.4 14.7-5.9 42.2-8.5 52.8-8.4 33.1-25.2 48.5-59.2 54.3-11.8 2.1-13.9 2.1-50.8 1.3-21.2-.5-45.7-.9-54.5-.8-22.7.2-41.4 3.7-52.2 10-19.5 11.3-32.5 55.6-32.7 111.4-.1 36.6 4.1 61.7 13.1 78.1 5.3 9.9 18.5 19.8 34.3 25.8 29.2 11.2 78.6 12.8 121.3 4 19.1-4 35.6-9.7 48.4-16.7 12.6-6.9 13.3-7.7 14.9-15.8 1.2-6.3 3.4-50.1 2.9-58.4-.1-1.9-.3-5.4-.3-7.8l-.2-4.2H422v-11.7l109.3-.6c106.2-.7 109.4-.8 116.7-2.8 27.7-7.6 47.3-33.7 55.2-73.3 3.2-16.1 3.2-43.4 0-59.3-8.3-41.6-29.7-72.4-61-88.2-13.5-6.8-34.6-12.1-48.4-12.1h-5.6l-.6 3.7zm-68 261.8c27 13.8 16.8 55-13.6 54.9-17.3-.1-30-13.9-28.8-31.3 1.5-21.1 23.4-33.3 42.4-23.6z" />
  </svg>
  )
}

export const PythonLogo = (props ) =>{
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1146.667}
    height={1045.333}
    viewBox="0 0 860 784"
    {...props}
  >
    <path d="M412 74.1c-72.2 3.9-141.6 31.2-197.6 77.6-12.5 10.2-35.7 33.9-45.5 46.3-92.4 116.6-92.5 275.8-.1 392 9.5 11.9 31.8 34.8 43.7 44.8 74.1 62.4 170.5 89.9 267.2 76.3C616.2 691.9 727.2 591.8 756 462c20.5-92.3-1.8-188.4-61.1-263.2-10.4-13-33.4-36.5-46.3-47.1-48.3-40.1-105.7-65.6-168.1-74.6-12-1.8-45.9-4.3-52-3.9-1.1 0-8.5.5-16.5.9zm66.5 13.7c61.8 9.8 112.6 31.8 159 68.9 13.7 10.9 36.4 33.5 47 46.8 12.8 16 27.8 39.4 36.4 56.9 7.3 14.7 18.8 43.3 17.8 44.2-.2.3-409.7 8.4-424.4 8.4-.9 0-1.3 1.8-1.3 5.5v5.5h4.8c2.6 0 99-1.8 214.2-4 115.2-2.2 209.7-3.6 210.1-3.2 1 1 5.4 21.5 7.5 34.2 2.5 16 3.1 58.6 1 76.4-4.2 36.7-14.3 70.2-31.1 103.1-6.6 13-15.2 27.6-19.8 33.5l-2 2.5.6-4c3.1-21.1 3.3-59.6.3-74.2-7.8-38-28.1-60.4-66.1-72.8-30.3-10-74.7-13-161.9-11.3-143.6 2.9-188.9.4-226.9-12.2-43.9-14.7-68.5-42.1-81.2-90.7-3.1-12-6.9-33.8-8.6-49.5l-1.3-11.6 8.6-12.9c42-62.7 104.4-108.3 177.9-129.7 14.1-4.1 37.9-8.9 51.9-10.5 5.2-.6 10.9-1.3 12.5-1.5 1.7-.2 16.3-.3 32.5-.1 23.8.2 32 .7 42.5 2.3zM519 483.5v6.5H126.1l-1.6-5.2c-.8-2.8-1.5-5.5-1.5-6 0-.8 55.3-1.2 265.3-1.6L519 477v6.5zm-72.9 78.2c7.8 3.6 13.9 9.6 17.6 17.1 2.4 4.9 2.8 6.9 2.8 14.2 0 7.1-.4 9.4-2.6 14-3.5 7.5-9.8 13.6-17.7 17.3-6 2.9-7.7 3.2-15.7 3.2-8 0-9.7-.3-15.7-3.2-7.9-3.7-13.7-9.4-17.5-17.1-2.4-4.9-2.8-6.9-2.8-14.2 0-7.3.4-9.3 2.8-14.2 8.9-18.1 30.5-25.7 48.8-17.1z" />
    <path d="M421.2 181.1c-11.8 2-23.2 11-27.3 21.7-4.6 12.1-1.9 25.8 6.9 35 22 23.2 62.1 8.8 62.5-22.3.2-21.6-19.8-38-42.1-34.4z" />
  </svg>
  )
}