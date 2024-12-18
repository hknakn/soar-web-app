interface IconProps {
  className?: string;
}

export function LogoIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      fill="none"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.875 2.917a2.916 2.916 0 0 1 2.526 1.458h1.849a2.916 2.916 0 0 1 2.917 2.917v17.5a7.292 7.292 0 0 1-7.292 7.291H8.75a2.917 2.917 0 0 1-2.917-2.916V7.292A2.917 2.917 0 0 1 8.75 4.375h1.85a2.917 2.917 0 0 1 2.525-1.458h8.75Zm-.257 10.76-6.186 6.188-2.063-2.063a1.458 1.458 0 0 0-2.063 2.062l2.99 2.991a1.604 1.604 0 0 0 2.27 0l7.116-7.115a1.458 1.458 0 1 0-2.064-2.062Zm-.472-7.844h-7.292a.729.729 0 0 0-.717.598l-.012.132V8.02a.73.73 0 0 0 .598.717l.131.012h7.292a.73.73 0 0 0 .717-.598l.012-.131V6.563a.729.729 0 0 0-.598-.718l-.131-.012Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function HomeIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="m24.326 10.874-.002-.002L14.126.674A2.286 2.286 0 0 0 12.498 0c-.614 0-1.192.24-1.627.674L.678 10.867l-.01.01a2.304 2.304 0 0 0 .004 3.25 2.288 2.288 0 0 0 1.598.675h.407v7.505A2.697 2.697 0 0 0 5.37 25h3.99a.732.732 0 0 0 .732-.732v-5.884a1.23 1.23 0 0 1 1.229-1.23h2.353a1.23 1.23 0 0 1 1.229 1.23v5.884c0 .404.328.732.732.732h3.99a2.697 2.697 0 0 0 2.694-2.693v-7.505h.377c.614 0 1.192-.24 1.627-.675a2.305 2.305 0 0 0 .002-3.253Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CreditCardIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      fill="none"
      className={className}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M22.96 7.163v-.355a2.969 2.969 0 0 0-2.964-2.966H2.966A2.969 2.969 0 0 0 0 6.809v.355h22.96ZM13.565 16.702c0-1.538.495-3 1.408-4.205H0v4.136a2.969 2.969 0 0 0 2.965 2.965h11.226a6.958 6.958 0 0 1-.626-2.896Zm-2.085-.899H8.921V14.28h2.56v1.523ZM3.415 14.28h3.983v1.523H3.415V14.28ZM16.555 10.973a6.929 6.929 0 0 1 3.99-1.25 6.98 6.98 0 0 1 2.416.428V8.687H0v2.286h16.555ZM26 16.702a5.456 5.456 0 1 0-10.912 0 5.456 5.456 0 0 0 10.912 0Zm-4.72 2.914v.62h-1.524v-.615c-.46-.156-.837-.43-1.205-.7l.9-1.23c.494.362.747.536 1.093.536.196 0 .355-.093.415-.243.072-.182-.03-.35-.273-.448 0 0-1.089-.364-1.592-.877-.422-.43-.557-1.037-.422-1.614a1.78 1.78 0 0 1 1.084-1.263v-.615h1.524v.59c.386.107.714.266.902.368l-.726 1.339c-.482-.262-.926-.34-1.098-.281-.168.057-.193.166-.203.207-.013.059-.02.148.073.252.09.1 1.032.483 1.032.483 1.018.414 1.497 1.454 1.115 2.42a1.895 1.895 0 0 1-1.095 1.071Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h26v26H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function BanknotesIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <path
        fill="currentColor"
        d="M5.208 22.917A2.086 2.086 0 0 0 7.292 25h10.416a2.086 2.086 0 0 0 2.084-2.083v-.912H5.208v.912ZM19.792 2.083A2.086 2.086 0 0 0 17.708 0H7.292a2.086 2.086 0 0 0-2.084 2.083v1.042h14.584V2.083ZM24.71 6.7l-3.125-3.255-1.503 1.443 1.307 1.362h-1.597v2.083h1.71l-1.39 1.332 1.442 1.504 3.125-2.995a1.041 1.041 0 0 0 .03-1.473Z"
      />
      <path
        fill="currentColor"
        d="M16.667 6.25h3.125V4.167H5.208v12.5h3.125v2.083H5.208v2.083h14.584v-12.5h-3.125V6.25Zm-1.042 4.167h-3.646a.521.521 0 0 0 0 1.041h1.042a2.603 2.603 0 0 1 .52 5.157v1.093h-2.083v-1.041H9.375v-2.084h3.646a.52.52 0 0 0 0-1.041h-1.042a2.604 2.604 0 0 1-.52-5.157V7.292h2.083v1.041h2.083v2.084ZM3.498 16.667l1.39-1.332-1.442-1.504L.32 16.826a1.042 1.042 0 0 0-.03 1.473l3.124 3.256 1.503-1.443-1.307-1.362h1.597v-2.083h-1.71Z"
      />
    </svg>
  );
}

export function UserIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M12.322 12.043c1.654 0 3.087-.594 4.257-1.764 1.17-1.171 1.764-2.603 1.764-4.258 0-1.654-.593-3.086-1.764-4.257C15.41.594 13.976 0 12.322 0c-1.655 0-3.087.593-4.258 1.764C6.894 2.934 6.3 4.367 6.3 6.02c0 1.655.594 3.087 1.765 4.258 1.17 1.17 2.603 1.764 4.257 1.764ZM22.858 19.224a14.892 14.892 0 0 0-.203-1.58c-.101-.565-.232-1.1-.388-1.588a7.848 7.848 0 0 0-.653-1.482 5.587 5.587 0 0 0-.985-1.283 4.341 4.341 0 0 0-1.414-.888 4.89 4.89 0 0 0-1.805-.327c-.256 0-.503.105-.98.415-.293.191-.636.413-1.019.657-.327.21-.77.405-1.319.582a5.239 5.239 0 0 1-1.613.26 5.243 5.243 0 0 1-1.614-.26c-.547-.177-.99-.373-1.318-.581-.38-.243-.722-.464-1.02-.658-.476-.31-.723-.415-.978-.415-.65 0-1.258.11-1.806.327a4.337 4.337 0 0 0-1.414.889 5.59 5.59 0 0 0-.984 1.283 7.86 7.86 0 0 0-.653 1.481 12.475 12.475 0 0 0-.389 1.588c-.1.56-.168 1.092-.202 1.58-.033.479-.05.975-.05 1.477 0 1.305.415 2.361 1.233 3.14.808.769 1.877 1.16 3.177 1.16h12.037c1.3 0 2.37-.39 3.177-1.16.819-.778 1.233-1.835 1.233-3.14 0-.504-.017-1.001-.05-1.477Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ChartBarIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M3.92 10.227H1.138c-.628 0-1.137.51-1.137 1.137v12.5C0 24.49.509 25 1.137 25H3.92c.627 0 1.136-.51 1.136-1.136v-12.5c0-.628-.509-1.137-1.136-1.137ZM10.569 13.636H7.785c-.629 0-1.137.509-1.137 1.136v9.09c0 .629.508 1.137 1.137 1.137h2.784c.627 0 1.136-.509 1.136-1.136v-9.09c0-.628-.509-1.137-1.136-1.137ZM17.215 13.636h-2.784c-.627 0-1.136.509-1.136 1.136v9.09c0 .629.509 1.137 1.136 1.137h2.784c.629 0 1.137-.509 1.137-1.136v-9.09c0-.628-.508-1.137-1.137-1.137ZM23.863 10.227H21.08c-.627 0-1.136.51-1.136 1.137v12.5c0 .627.509 1.136 1.136 1.136h2.784c.628 0 1.137-.51 1.137-1.136v-12.5c0-.628-.509-1.137-1.137-1.137ZM12.831 6.846v2.046c.62-.041 1.272-.332 1.272-1.013 0-.703-.715-.91-1.272-1.033ZM11.052 4.397c0 .517.385.816 1.16.972v-1.85c-.705.02-1.16.434-1.16.878Z" />
        <path d="M12.5 0a6.257 6.257 0 0 0-6.25 6.25 6.257 6.257 0 0 0 6.25 6.249 6.257 6.257 0 0 0 6.25-6.249A6.257 6.257 0 0 0 12.5 0Zm.331 9.946v.64c0 .176-.135.352-.311.352-.175 0-.308-.176-.308-.352v-.64c-1.747-.042-2.615-1.086-2.615-1.902 0-.413.25-.65.64-.65 1.157 0 .257 1.425 1.975 1.497v-2.16c-1.532-.278-2.46-.95-2.46-2.096 0-1.405 1.168-2.13 2.46-2.17v-.551c0-.176.133-.352.308-.352.176 0 .311.176.311.352v.55c.806.022 2.46.527 2.46 1.54 0 .403-.302.64-.653.64-.673 0-.663-1.104-1.807-1.125v1.963c1.364.29 2.572.692 2.572 2.284 0 1.384-1.033 2.086-2.572 2.18Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function WrenchIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M24.785 1.25 23.75.215a.733.733 0 0 0-.821-.15l-5.564 2.456a.733.733 0 0 0-.214 1.185l4.143 4.143a.733.733 0 0 0 1.185-.214l2.456-5.564a.733.733 0 0 0-.15-.82ZM4.731 16.125l-4.088 4.09a2.2 2.2 0 0 0 0 3.107l1.035 1.035a2.2 2.2 0 0 0 3.108 0l4.089-4.088-4.144-4.143Zm-.456 5.646a.732.732 0 1 1-1.036-1.036l2.017-2.017a.732.732 0 1 1 1.036 1.036L4.275 21.77ZM11.982 17.161l-4.143-4.143a1.467 1.467 0 0 0-2.072 0 1.467 1.467 0 0 0 0 2.072l4.143 4.143c.571.57 1.5.57 2.072 0 .571-.571.571-1.5 0-2.072ZM19.222 7.85l-2.071-2.072-5.687 5.686a1.465 1.465 0 0 0-2.072 0l-.517.518 4.143 4.143.518-.518c.572-.572.572-1.499 0-2.071l5.686-5.687ZM23.715 17.498c-1.19-1.19-2.62-1.445-4.26-1.152l-3.33-3.329-.795.795a2.924 2.924 0 0 1-.76 2.831l-.516.517 2.292 2.291c-.232 1.293-.21 2.39.593 3.58.927 1.372 2.549 2.153 4.248 1.919a.747.747 0 0 0 .426-1.268l-1.008-1.006v-2.071h2.074l1.002 1.002a.747.747 0 0 0 1.268-.43 4.378 4.378 0 0 0-1.234-3.68ZM8.644 5.532c.29-1.623.056-3.051-1.151-4.259A4.342 4.342 0 0 0 4.399 0c-.197 0-.393.013-.586.038a.747.747 0 0 0-.43 1.27l1.012 1v2.086H2.314L1.31 3.376a.747.747 0 0 0-1.269.427A4.392 4.392 0 0 0 1.96 8.05c1.194.804 2.297.824 3.58.593l2.301 2.304.517-.517a2.924 2.924 0 0 1 2.831-.76l.795-.794-3.339-3.343Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SettingsIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M22.698 9.414h-.53c-.173-.54-.39-1.064-.65-1.567l.375-.376c.912-.91.887-2.37 0-3.255l-1.108-1.11a2.301 2.301 0 0 0-3.256 0l-.376.377a10.105 10.105 0 0 0-1.567-.65V2.3A2.304 2.304 0 0 0 13.284 0h-1.569a2.304 2.304 0 0 0-2.3 2.301v.531c-.54.173-1.065.39-1.568.65l-.376-.375a2.301 2.301 0 0 0-3.255 0l-1.11 1.109a2.301 2.301 0 0 0 0 3.255l.377.376c-.26.503-.478 1.028-.65 1.567H2.3A2.304 2.304 0 0 0 0 11.716v1.569a2.304 2.304 0 0 0 2.301 2.3h.531c.173.54.39 1.065.65 1.568l-.375.376a2.301 2.301 0 0 0 0 3.255l1.109 1.11a2.301 2.301 0 0 0 3.255 0l.376-.377c.503.26 1.028.478 1.567.65v.532A2.304 2.304 0 0 0 11.716 25h1.569a2.304 2.304 0 0 0 2.301-2.301v-.531c.54-.173 1.064-.39 1.567-.65l.376.375c.909.91 2.368.889 3.255 0l1.11-1.109a2.302 2.302 0 0 0 0-3.255l-.377-.376c.26-.503.478-1.028.65-1.567h.532A2.304 2.304 0 0 0 25 13.284v-1.569a2.304 2.304 0 0 0-2.302-2.3ZM12.5 17.94c-3 0-5.44-2.44-5.44-5.439 0-3 2.44-5.44 5.44-5.44 3 0 5.44 2.44 5.44 5.44 0 3-2.44 5.44-5.44 5.44Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SettingsOutlineIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} width={25} height={25} fill="none">
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M13.284 25h-1.569a2.304 2.304 0 0 1-2.301-2.301v-.531c-.54-.173-1.064-.39-1.567-.65l-.376.375a2.301 2.301 0 0 1-3.256 0l-1.108-1.109a2.301 2.301 0 0 1 0-3.255l.376-.376a10.096 10.096 0 0 1-.65-1.567H2.3A2.304 2.304 0 0 1 0 13.284v-1.569a2.304 2.304 0 0 1 2.301-2.3h.531c.173-.54.39-1.065.65-1.568l-.375-.376a2.301 2.301 0 0 1 0-3.255l1.109-1.11a2.301 2.301 0 0 1 3.255 0l.376.377c.503-.26 1.028-.478 1.567-.65V2.3A2.304 2.304 0 0 1 11.716 0h1.569a2.304 2.304 0 0 1 2.3 2.301v.531c.54.173 1.065.39 1.568.65l.376-.375a2.302 2.302 0 0 1 3.256 0l1.108 1.109a2.301 2.301 0 0 1 0 3.255l-.376.376c.26.503.478 1.027.65 1.567h.531A2.304 2.304 0 0 1 25 11.716v1.569a2.304 2.304 0 0 1-2.302 2.3h-.53c-.173.54-.39 1.065-.65 1.568l.375.376c.912.91.887 2.37 0 3.256l-1.109 1.108a2.301 2.301 0 0 1-3.255 0l-.376-.376c-.503.26-1.028.479-1.567.65v.532A2.304 2.304 0 0 1 13.284 25Zm-5.192-5.021c.7.414 1.452.726 2.237.929.324.083.55.375.55.71v1.08c0 .462.375.837.837.837h1.569a.838.838 0 0 0 .836-.836v-1.082c0-.334.226-.626.55-.709a8.636 8.636 0 0 0 2.237-.929.732.732 0 0 1 .891.113l.766.766c.33.33.86.323 1.183 0l1.11-1.11a.837.837 0 0 0 0-1.183l-.766-.766a.732.732 0 0 1-.113-.89c.414-.7.726-1.453.929-2.238a.733.733 0 0 1 .71-.55h1.08a.838.838 0 0 0 .837-.836v-1.57a.837.837 0 0 0-.836-.836h-1.082a.733.733 0 0 1-.709-.55 8.633 8.633 0 0 0-.929-2.237.732.732 0 0 1 .113-.891l.766-.766a.836.836 0 0 0 0-1.183l-1.11-1.11a.836.836 0 0 0-1.183 0l-.766.767a.732.732 0 0 1-.89.112 8.631 8.631 0 0 0-2.238-.929.732.732 0 0 1-.55-.709V2.301a.838.838 0 0 0-.836-.836h-1.57a.838.838 0 0 0-.836.836v1.082a.732.732 0 0 1-.55.709 8.634 8.634 0 0 0-2.237.929.733.733 0 0 1-.891-.113l-.766-.766a.836.836 0 0 0-1.183 0l-1.11 1.11a.836.836 0 0 0 0 1.183l.766.766a.732.732 0 0 1 .113.89 8.632 8.632 0 0 0-.929 2.239.732.732 0 0 1-.71.549h-1.08a.838.838 0 0 0-.837.837v1.569c0 .46.375.836.836.836h1.082c.334 0 .626.226.709.55.203.785.515 1.538.929 2.237a.732.732 0 0 1-.113.891l-.766.766a.836.836 0 0 0 0 1.183l1.11 1.11a.836.836 0 0 0 1.183 0l.766-.767a.736.736 0 0 1 .89-.112Z" />
        <path d="M12.5 17.94c-3 0-5.44-2.44-5.44-5.44 0-3 2.44-5.44 5.44-5.44 3 0 5.44 2.44 5.44 5.44 0 3-2.44 5.44-5.44 5.44Zm0-9.415A3.98 3.98 0 0 0 8.525 12.5a3.98 3.98 0 0 0 3.975 3.975 3.98 3.98 0 0 0 3.975-3.975A3.979 3.979 0 0 0 12.5 8.525Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function GroupIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M4.811 16.668c.252.15.468.344.64.57h3.255V14.08l-1.544-.957a.732.732 0 1 1 .772-1.245l1.504.932 1.311-.813C8.134 8.413 8.735 3.332 12.216.465 6.482-1.456.468 2.814.44 8.945a8.933 8.933 0 0 0 4.37 7.723ZM5.909 18.702h6.933v1.66H5.909v-1.66ZM10.17 14.08v3.157h3.12c.166-.218.372-.406.613-.547a8.95 8.95 0 0 0 1.818-1.417 8.44 8.44 0 0 1-3.996-2.157l-1.554.965Z" />
        <path d="M17.578.002c-3.84 0-6.982 3.174-6.982 7.03 0 3.63 2.785 6.633 6.356 6.954 4.133.37 7.607-2.907 7.607-6.953 0-3.85-3.132-7.03-6.981-7.03Zm.733 10.205v.153a.732.732 0 1 1-1.465 0v-.07c-.337-.06-.645-.185-1.035-.44a.732.732 0 1 1 .802-1.226c.357.234.473.252.96.248.472-.003.66-.373.696-.59.033-.196-.004-.456-.367-.585-.608-.215-1.231-.461-1.673-.808-1.006-.789-.702-2.59.617-3.07v-.106a.732.732 0 0 1 1.465 0v.04c.36.102.651.287.851.49a.732.732 0 0 1-1.044 1.027c-.04-.04-.266-.228-.755-.08-.194.058-.247.26-.258.32-.024.127.01.212.028.227.276.216.79.414 1.257.58 1.93.682 1.695 3.249-.079 3.89ZM7.08 22.705A2.297 2.297 0 0 0 9.376 25a2.297 2.297 0 0 0 2.295-2.295v-.878H7.08v.878Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function BuildingIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M14.492 15.337c4.195 0 7.608-3.44 7.608-7.668C22.1 3.44 18.687 0 14.492 0S6.885 3.44 6.885 7.669c0 4.228 3.412 7.668 7.607 7.668Zm-2.444-5.275a.732.732 0 0 1 1.013-.212c.493.322.679.352 1.33.347.634-.004 1.003-.477 1.076-.915.036-.213.05-.733-.595-.961-.756-.267-1.53-.573-2.068-.995-.539-.422-.785-1.151-.644-1.902.154-.815.722-1.463 1.483-1.692l.02-.006V3.45a.732.732 0 1 1 1.464 0v.231c.497.119.845.346.986.452a.732.732 0 1 1-.877 1.172c-.15-.112-.565-.353-1.171-.17-.354.107-.446.456-.466.56-.039.206.005.399.108.48.373.293 1.045.552 1.653.767 1.12.396 1.744 1.434 1.55 2.584a2.594 2.594 0 0 1-.798 1.473c-.286.263-.62.45-.985.558v.332a.732.732 0 0 1-1.464 0v-.259c-.473-.057-.87-.205-1.404-.554a.732.732 0 0 1-.211-1.013ZM2.774 17.797H1.105a.732.732 0 0 0-.732.732v5.738c0 .404.328.732.732.732h1.67v-7.202ZM24.412 17.746a3.523 3.523 0 0 0-4.976 0l-2.193 2.192-.899.9a1.937 1.937 0 0 1-1.37.566h-4.37a.747.747 0 0 1-.753-.697.733.733 0 0 1 .733-.769h4.442c.893 0 1.667-.636 1.82-1.515.036-.202.055-.41.055-.622a.733.733 0 0 0-.733-.734h-2.434c-.796 0-1.56-.36-2.368-.743-.849-.4-1.726-.815-2.751-.883a7.752 7.752 0 0 0-2.673.292A2.37 2.37 0 0 0 4.248 17.8h-.01v7.197L16.85 25c.867 0 1.683-.338 2.296-.95l5.267-5.268a.733.733 0 0 0 0-1.036Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SearchIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}

export function BellIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <path
        fill="currentColor"
        d="M11.442 25a3.911 3.911 0 0 1-3.906-3.906.782.782 0 0 1 1.562 0 2.347 2.347 0 0 0 2.344 2.343 2.347 2.347 0 0 0 2.344-2.343.782.782 0 0 1 1.562 0A3.911 3.911 0 0 1 11.442 25Z"
      />
      <path
        fill="currentColor"
        d="M20.036 21.875H2.848a1.825 1.825 0 0 1-1.185-3.208.732.732 0 0 1 .083-.063 7 7 0 0 0 2.404-5.281v-2.906c0-4.021 3.272-7.292 7.292-7.292.167 0 .347.003.514.031a.781.781 0 1 1-.257 1.54c-.083-.013-.175-.008-.257-.008a5.736 5.736 0 0 0-5.73 5.729v2.906a8.567 8.567 0 0 1-3.023 6.532l-.046.036a.258.258 0 0 0-.055.161c0 .142.119.26.26.26h17.188c.141 0 .26-.118.26-.26a.249.249 0 0 0-.056-.161l-.045-.036a8.565 8.565 0 0 1-3.024-6.532v-1.135a.782.782 0 0 1 1.563 0v1.135c0 2.028.876 3.949 2.407 5.284a.77.77 0 0 1 .08.06 1.825 1.825 0 0 1-1.186 3.207Z"
      />
      <path
        fill="currentColor"
        d="M18.734 10.417a5.214 5.214 0 0 1-5.209-5.209A5.214 5.214 0 0 1 18.734 0a5.214 5.214 0 0 1 5.208 5.208 5.214 5.214 0 0 1-5.208 5.209Zm0-8.854a3.65 3.65 0 0 0-3.646 3.645 3.65 3.65 0 0 0 3.646 3.646 3.65 3.65 0 0 0 3.645-3.646 3.65 3.65 0 0 0-3.645-3.646Z"
      />
    </svg>
  );
}

export function CardDepositIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        fill="#FFBB38"
        d="M18.645 24.61H5.68a2.62 2.62 0 0 1-2.617-2.618v-7.738a2.62 2.62 0 0 1 2.617-2.617h12.965a2.62 2.62 0 0 1 2.617 2.617v7.738a2.62 2.62 0 0 1-2.617 2.617ZM5.68 13.277a.978.978 0 0 0-.977.976v7.738a.978.978 0 0 0 .977.977h12.965a.978.978 0 0 0 .977-.977v-7.738a.978.978 0 0 0-.977-.976H5.68Z"
      />
      <path
        fill="#FFBB38"
        d="M22.321 20.192h-1.879a.82.82 0 1 1 0-1.64h1.88a.978.978 0 0 0 .975-.978V9.837a.978.978 0 0 0-.976-.978H9.356a.978.978 0 0 0-.977.977v2.62a.82.82 0 0 1-1.64 0v-2.62A2.62 2.62 0 0 1 9.356 7.22H22.32a2.62 2.62 0 0 1 2.616 2.618v7.737a2.62 2.62 0 0 1-2.616 2.618Z"
      />
      <path
        fill="#FFBB38"
        d="M20.442 18.746H3.882a.82.82 0 0 1-.82-.82v-2.755a.82.82 0 0 1 .82-.82h16.56a.82.82 0 0 1 .82.82v2.755a.82.82 0 0 1-.82.82Zm-15.739-1.64h14.919V15.99H4.703v1.115Z"
      />
    </svg>
  );
}

export function PaypalIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        fill="#396AFF"
        d="M22.995 8.383a5.81 5.81 0 0 0-5.801-5.758H8.75a.875.875 0 0 0-.875.735L4.882 22.129a.875.875 0 0 0 .202.7.876.876 0 0 0 .665.315h3.613L9.17 24.36a.875.875 0 0 0 .875 1.015h4.069a.875.875 0 0 0 .875-.726l.875-5.347h2.756a6.527 6.527 0 0 0 6.501-6.518v-.245a5.136 5.136 0 0 0-2.126-4.156ZM9.494 4.375h7.7a4.06 4.06 0 0 1 3.946 3.159 4.97 4.97 0 0 0-1.155-.131h-7.297a.875.875 0 0 0-.876.735l-.516 3.237a.886.886 0 0 0 1.75.28l.403-2.52h6.554c.419.002.834.082 1.224.236a5.662 5.662 0 0 1-5.6 4.979h-4.06a.875.875 0 0 0-.874.726l-1.068 6.318H6.772L9.494 4.375Zm13.877 8.409a4.777 4.777 0 0 1-4.751 4.768h-3.5a.875.875 0 0 0-.875.727l-.875 5.346h-2.31l.192-1.216 1.05-6.291h3.308a7.403 7.403 0 0 0 7.14-5.53c.406.569.623 1.251.621 1.95v.246Z"
      />
    </svg>
  );
}

export function UserPaymentIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        fill="#16DBCC"
        d="M14 11.379c.496 0 .901.404.901.9a.82.82 0 0 0 1.64 0c0-1.112-.724-2.05-1.721-2.393V9.42a.821.821 0 0 0-1.64 0v.466a2.537 2.537 0 0 0-1.72 2.393A2.543 2.543 0 0 0 14 14.821c.496 0 .901.405.901.9a.902.902 0 0 1-1.801 0 .821.821 0 0 0-1.64 0c0 1.113.722 2.05 1.72 2.393v.465a.82.82 0 1 0 1.64 0v-.465a2.537 2.537 0 0 0 1.721-2.392 2.544 2.544 0 0 0-2.54-2.542.902.902 0 0 1 0-1.801Zm6.872 7.176a.82.82 0 0 0 1.108-.341A9.039 9.039 0 0 0 23.022 14c0-4.973-4.049-9.02-9.022-9.02C9.026 4.98 4.98 9.026 4.98 14c0 4.974 4.047 9.021 9.021 9.021a9.03 9.03 0 0 0 4.155-1.011.82.82 0 1 0-.758-1.456 7.27 7.27 0 0 1-3.397.828c-4.07 0-7.382-3.311-7.382-7.382 0-4.069 3.312-7.381 7.382-7.381S21.383 9.93 21.383 14a7.402 7.402 0 0 1-.852 3.446.819.819 0 0 0 .341 1.109ZM14 1.697c-2.376 0-4.683.68-6.67 1.965a.82.82 0 1 0 .89 1.377A10.625 10.625 0 0 1 14 3.34c5.88 0 10.662 4.782 10.662 10.661 0 5.88-4.782 10.663-10.662 10.663C8.12 24.663 3.337 19.88 3.337 14c0-2.04.578-4.022 1.673-5.733a.82.82 0 0 0-1.382-.885A12.265 12.265 0 0 0 1.698 14c0 6.785 5.517 12.303 12.302 12.303 6.784 0 12.303-5.518 12.303-12.303 0-6.783-5.519-12.303-12.303-12.303Z"
      />
    </svg>
  );
}

export function CardTypeLogoDark({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg width={44} height={30} fill="none" className={className}>
      <circle cx={15} cy={15} r={15} fill="#fff" fillOpacity={0.5} />
      <circle cx={29} cy={15} r={15} fill="#fff" fillOpacity={0.5} />
    </svg>
  );
}

export function CardTypeLogoLight({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg width={44} height={30} fill="none" className={className}>
      <circle cx={15} cy={15} r={15} fill="#9199AF" fillOpacity={0.5} />
      <circle cx={29} cy={15} r={15} fill="#9199AF" fillOpacity={0.5} />
    </svg>
  );
}

export function SendIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      width={26}
      height={23}
      fill="none"
      className={className}
    >
      <path
        fill="currentColor"
        d="M25.982.923a.762.762 0 0 0-1.016-.872L.49 9.395a.762.762 0 0 0-.003 1.422l6.876 2.656v8.364a.762.762 0 0 0 1.442.343l2.844-5.644 6.94 5.15a.762.762 0 0 0 1.182-.389C26.251.053 25.971.977 25.982.923ZM19.94 3.6 8.017 12.092l-5.13-1.981L19.94 3.6ZM8.887 13.343 19.28 5.94c-8.943 9.435-8.476 8.938-8.515 8.99-.058.079.1-.225-1.878 3.702v-5.29Zm9.742 6.477-6.108-4.534L23.566 3.634 18.629 19.82Z"
      />
    </svg>
  );
}
