type IconProps = {
  className?: string;
};

const Menu = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);

const ChevronRight = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    ></path>
  </svg>
);

const ChevronDown = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

const CloseCircle = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

const Facebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="#fff"
      d="M24 12c0-6.63-5.375-12-12-12C5.37 0 0 5.37 0 12c0 5.988 4.387 10.953 10.125 11.852V15.47H7.078v-3.468h3.047V9.355c0-3.006 1.789-4.667 4.53-4.667 1.314 0 2.689.234 2.689.234v2.953h-1.516c-1.488 0-1.953.926-1.953 1.875V12h3.328l-.535 3.469h-2.793v8.383C19.609 22.952 24 17.986 24 11.999V12z"
    ></path>
  </svg>
);

const Twitter = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0.47998C5.63758 0.47998 0.47998 5.63758 0.47998 12C0.47998 18.3624 5.63758 23.52 12 23.52C18.3624 23.52 23.52 18.3624 23.52 12C23.52 5.63758 18.3624 0.47998 12 0.47998ZM16.686 9.91678C16.6908 10.0152 16.692 10.1136 16.692 10.2096C16.692 13.2096 14.4108 16.6668 10.2372 16.6668C9.00393 16.6688 7.79634 16.3146 6.75958 15.6468C6.93598 15.6684 7.11718 15.6768 7.30078 15.6768C8.36398 15.6768 9.34198 15.3156 10.1184 14.706C9.64524 14.6967 9.18679 14.54 8.80691 14.2578C8.42704 13.9756 8.14468 13.5819 7.99918 13.1316C8.33897 13.1962 8.689 13.1827 9.02278 13.092C8.50924 12.9881 8.04742 12.7099 7.71563 12.3044C7.38384 11.8989 7.20251 11.3911 7.20238 10.8672V10.8396C7.50838 11.0088 7.85878 11.112 8.23078 11.124C7.74934 10.8035 7.40852 10.3112 7.27803 9.74774C7.14755 9.18429 7.23724 8.59228 7.52878 8.09278C8.09873 8.79358 8.80949 9.36688 9.61506 9.77555C10.4206 10.1842 11.303 10.4192 12.2052 10.4652C12.0905 9.97835 12.1399 9.46727 12.3456 9.01139C12.5513 8.5555 12.9019 8.18037 13.3429 7.9443C13.7838 7.70823 14.2904 7.62445 14.7839 7.70599C15.2773 7.78753 15.73 8.02981 16.0716 8.39518C16.5794 8.29471 17.0664 8.10845 17.5116 7.84438C17.3423 8.37014 16.988 8.81659 16.5144 9.10078C16.9642 9.0466 17.4034 8.92567 17.8176 8.74198C17.5134 9.19785 17.1301 9.59571 16.686 9.91678Z"
      fill="white"
    />
  </svg>
);

const LinkedIn = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0.47998C5.63758 0.47998 0.47998 5.63758 0.47998 12C0.47998 18.3624 5.63758 23.52 12 23.52C18.3624 23.52 23.52 18.3624 23.52 12C23.52 5.63758 18.3624 0.47998 12 0.47998ZM9.17998 16.7748H6.84718V9.26758H9.17998V16.7748ZM7.99918 8.34598C7.26238 8.34598 6.78598 7.82398 6.78598 7.17838C6.78598 6.51958 7.27678 6.01318 8.02918 6.01318C8.78158 6.01318 9.24238 6.51958 9.25678 7.17838C9.25678 7.82398 8.78158 8.34598 7.99918 8.34598ZM17.7 16.7748H15.3672V12.6144C15.3672 11.646 15.0288 10.9884 14.1852 10.9884C13.5408 10.9884 13.158 11.4336 12.9888 11.862C12.9264 12.0144 12.9108 12.2304 12.9108 12.4452V16.7736H10.5768V11.6616C10.5768 10.7244 10.5468 9.94078 10.5156 9.26638H12.5424L12.6492 10.3092H12.696C13.0032 9.81958 13.7556 9.09718 15.0144 9.09718C16.5492 9.09718 17.7 10.1256 17.7 12.336V16.7748Z"
      fill="white"
    />
  </svg>
);

const Youtube = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9236 11.7996L11.2284 10.542C10.9932 10.4328 10.8 10.5552 10.8 10.8156V13.1844C10.8 13.4448 10.9932 13.5672 11.2284 13.458L13.9224 12.2004C14.1588 12.09 14.1588 11.91 13.9236 11.7996ZM12 0.47998C5.63758 0.47998 0.47998 5.63758 0.47998 12C0.47998 18.3624 5.63758 23.52 12 23.52C18.3624 23.52 23.52 18.3624 23.52 12C23.52 5.63758 18.3624 0.47998 12 0.47998ZM12 16.68C6.10318 16.68 5.99998 16.1484 5.99998 12C5.99998 7.85158 6.10318 7.31998 12 7.31998C17.8968 7.31998 18 7.85158 18 12C18 16.1484 17.8968 16.68 12 16.68Z"
      fill="white"
    />
  </svg>
);

const ArrowRight = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
  </svg>
);

const Icons = {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  CloseCircle,
  Facebook,
  LinkedIn,
  Menu,
  Twitter,
  Youtube,
};

export default Icons;
