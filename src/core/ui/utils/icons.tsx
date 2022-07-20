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

const Calendar = ({ className = 'w-6 h-6' }: IconProps) => (
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
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
);

const Volunteer = () => (
  <svg
    width="94"
    height="85"
    viewBox="0 0 94 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50.4824 5.2248C55.1062 1.89573 60.4697 0.231186 66.5267 0.231186C69.8558 0.231186 73.5086 1.10969 77.485 2.95918C81.4614 4.76243 84.6055 6.88934 86.9174 9.33991C91.6798 15.2583 93.668 22.1476 92.9744 30.0079C92.2346 37.8683 89.6454 44.0178 85.1603 48.3641L50.0663 83.4582C49.1878 84.3367 48.0781 84.7528 46.7835 84.7528C45.4888 84.7528 44.4254 84.3367 43.5469 83.4582C43.1198 83.0369 42.7844 82.532 42.5616 81.975C42.3388 81.4181 42.2335 80.8211 42.2522 80.2215C42.2522 78.9269 42.6684 77.8172 43.5469 76.9387L64.7697 55.7158C65.9257 54.6986 65.9257 53.6352 64.7697 52.4792C63.6138 51.3233 62.5504 51.3233 61.5331 52.4792L40.3103 73.7021C39.8823 74.1331 39.3696 74.4708 38.8046 74.6936C38.2395 74.9164 37.6344 75.0197 37.0274 74.9967C35.7328 74.9967 34.6693 74.5806 33.7908 73.7021C33.3638 73.2808 33.0283 72.7759 32.8056 72.219C32.5828 71.662 32.4775 71.0651 32.4962 70.4655C32.4962 69.1709 32.9123 68.0612 33.7908 67.1827L55.0137 45.9598C56.2621 44.8038 56.2621 43.6479 55.0137 42.492C53.9502 41.3361 52.933 41.3361 51.7771 42.492L30.5542 63.9461C30.1214 64.3705 29.6079 64.7037 29.044 64.9261C28.4801 65.1485 27.8773 65.2554 27.2714 65.2407C25.9767 65.2407 24.867 64.8246 23.896 63.9461C22.9713 63.0675 22.5089 62.0041 22.5089 60.7094C22.5089 59.4148 23.0175 58.2589 24.0348 57.2416L45.3039 35.9725C46.4598 34.8166 46.4598 33.7532 45.3039 32.7359C44.1479 31.7187 43.0382 31.7187 42.021 32.7359L20.567 54.0513C19.5497 54.976 18.4863 55.4846 17.3304 55.4846C16.0357 55.4846 14.926 55.0223 14.0938 54.0513C13.2153 53.1265 12.7529 52.0168 12.7529 50.7222C12.7529 49.4276 13.2153 48.3641 14.0938 47.4856C28.2423 33.2445 36.9812 24.6444 40.3103 21.4541L56.7707 37.7296C58.574 39.4403 60.6546 40.3188 63.1977 40.3188C66.4343 40.3188 68.9773 39.0242 70.873 36.4349C72.1677 34.5392 72.6301 32.4585 72.2602 30.1467C71.8903 27.8348 70.9193 25.8928 69.3472 24.2745L50.4824 5.2248ZM60.0073 34.493L40.3103 14.7497L7.57431 47.4856C3.69039 43.5554 1.471 37.5446 0.962392 29.3606C0.453783 21.2229 2.67317 14.1486 7.57431 8.23022C13.0765 2.77423 19.6422 0 27.2714 0C34.9467 0 41.4662 2.77423 46.7835 8.23022L66.5267 27.9735C67.4053 28.852 67.8214 29.9155 67.8214 31.2101C67.8214 32.5048 67.4053 33.6144 66.5267 34.493C65.6482 35.3252 64.5848 35.7876 63.1977 35.7876C61.9493 35.7876 60.8858 35.3252 60.0073 34.493Z"
      fill="white"
    />
  </svg>
);

const Partner = () => (
  <svg
    width="107"
    height="85"
    viewBox="0 0 107 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M104.219 27.2265C106.643 28.6543 107.722 31.8916 106.145 34.4482C104.867 36.872 101.629 37.9511 99.0728 36.374L53.6842 11.3903L8.60097 36.374C6.03602 37.9511 2.80204 36.872 1.3768 34.4482C-0.0481169 31.8916 0.875926 28.6543 3.4412 27.2265L51.2603 0.668503C52.8541 -0.222834 54.8131 -0.222834 56.4068 0.668503L104.219 27.2265ZM47.0435 33.2031C47.0435 29.5341 50.1646 26.5625 53.6842 26.5625C57.5025 26.5625 60.3248 29.5341 60.3248 33.2031C60.3248 36.872 57.5025 39.8437 53.6842 39.8437C50.1646 39.8437 47.0435 36.872 47.0435 33.2031ZM17.8248 49.1406C17.8248 45.4716 20.9459 42.5 24.4654 42.5C28.2838 42.5 31.106 45.4716 31.106 49.1406C31.106 52.8095 28.2838 55.7812 24.4654 55.7812C20.9459 55.7812 17.8248 52.8095 17.8248 49.1406ZM89.5435 49.1406C89.5435 52.8095 86.7213 55.7812 82.9029 55.7812C79.3834 55.7812 76.2623 52.8095 76.2623 49.1406C76.2623 45.4716 79.3834 42.5 82.9029 42.5C86.7213 42.5 89.5435 45.4716 89.5435 49.1406ZM38.3775 81.58L33.7623 73.2959V79.6875C33.7623 82.6259 31.5377 85 28.4498 85H20.481C17.692 85 15.1685 82.6259 15.1685 79.6875V73.2959L10.8571 81.58C9.81288 83.5058 7.39735 84.2363 5.45995 83.1904C3.52255 82.1445 2.79706 79.7373 3.8413 77.7949L10.1283 66.124C12.6766 61.3925 17.6256 58.4375 22.9879 58.4375H26.2418C28.9478 58.4375 31.5377 59.1845 33.7789 60.5293L39.3404 50.1865C41.8971 45.455 46.8443 42.3505 52.2066 42.3505H55.4605C60.8228 42.3505 65.7701 45.455 68.3267 50.1865L73.8883 60.5293C76.1295 59.1845 78.7193 58.4375 81.4254 58.4375H84.6793C90.0416 58.4375 94.9889 61.3925 97.5455 66.124L103.821 77.7949C104.867 79.7373 104.136 82.1445 102.211 83.1904C100.268 84.2363 97.8609 83.5058 96.815 81.58L92.1998 73.2959V79.6875C92.1998 82.6259 89.9752 85 86.8873 85H78.9185C76.1295 85 73.606 82.6259 73.606 79.6875V73.2959L69.2896 81.58C68.2437 83.5058 65.8365 84.2363 63.8941 83.1904C61.8189 82.1445 61.2379 79.7373 62.2838 77.7949L68.3102 66.5888C68.0279 66.3232 67.7789 66.0078 67.5963 65.6425L62.981 57.3584V66.4062C62.981 69.3447 60.7564 71.7187 57.6685 71.7187H49.6998C46.9107 71.7187 44.3873 69.3447 44.3873 66.4062V57.3584L40.0709 65.6425C39.7389 66.0078 39.6392 66.3232 39.357 66.5888L45.3834 77.7949C46.4293 79.7373 45.6988 82.1445 43.773 83.1904C41.8307 84.2363 39.4234 83.5058 38.3775 81.58Z"
      fill="white"
    />
  </svg>
);

const Medical = () => (
  <svg
    width="97"
    height="85"
    viewBox="0 0 97 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.4215 29.2176H38.0461V39.8422C38.0461 40.5466 38.3259 41.2222 38.8241 41.7204C39.3222 42.2185 39.9978 42.4983 40.7023 42.4983H51.3268C52.0313 42.4983 52.7069 42.2185 53.205 41.7204C53.7031 41.2222 53.983 40.5466 53.983 39.8422V29.2176H64.6076C65.312 29.2176 65.9876 28.9378 66.4857 28.4396C66.9839 27.9415 67.2637 27.2659 67.2637 26.5615V15.9369C67.2637 15.2324 66.9839 14.5568 66.4857 14.0587C65.9876 13.5606 65.312 13.2807 64.6076 13.2807H53.983V2.65615C53.983 1.95169 53.7031 1.27609 53.205 0.777967C52.7069 0.279843 52.0313 0 51.3268 0H40.7023C39.9978 0 39.3222 0.279843 38.8241 0.777967C38.3259 1.27609 38.0461 1.95169 38.0461 2.65615V13.2807H27.4215C26.7171 13.2807 26.0415 13.5606 25.5433 14.0587C25.0452 14.5568 24.7654 15.2324 24.7654 15.9369V26.5615C24.7654 27.2659 25.0452 27.9415 25.5433 28.4396C26.0415 28.9378 26.7171 29.2176 27.4215 29.2176ZM95.1848 55.8305C94.6687 55.1269 94.0187 54.5322 93.2722 54.0805C92.5256 53.6288 91.6972 53.3291 90.8345 53.1984C89.9717 53.0678 89.0917 53.1088 88.2449 53.3192C87.3981 53.5296 86.6012 53.9052 85.8999 54.4244L66.0336 69.0631H46.0112C45.3068 69.0631 44.6312 68.7833 44.133 68.2851C43.6349 67.787 43.3551 67.1114 43.3551 66.407C43.3551 65.7025 43.6349 65.0269 44.133 64.5288C44.6312 64.0307 45.3068 63.7508 46.0112 63.7508H58.9998C61.6559 63.7508 64.1046 61.9463 64.5395 59.3333C64.6679 58.5703 64.6284 57.7885 64.4237 57.0423C64.2191 56.2962 63.8542 55.6036 63.3545 55.0129C62.8548 54.4221 62.2323 53.9475 61.5304 53.6219C60.8285 53.2964 60.064 53.1278 59.2903 53.1279H32.7288C28.249 53.127 23.9049 54.6655 20.4242 57.4856L12.7048 63.7508H3.51454C2.81157 63.7556 2.13874 64.037 1.64165 64.5341C1.14456 65.0312 0.863182 65.704 0.858398 66.407V82.3438C0.863182 83.0468 1.14456 83.7197 1.64165 84.2167C2.13874 84.7138 2.81157 84.9952 3.51454 85H61.1197C64.8041 84.9912 68.3907 83.813 71.3625 81.635L93.7787 65.1055C95.1935 64.0608 96.1361 62.4976 96.3997 60.7588C96.6634 59.0199 96.2264 57.2476 95.1848 55.8305Z"
      fill="white"
    />
  </svg>
);

const Support = () => (
  <svg
    width="96"
    height="85"
    viewBox="0 0 96 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M75.0394 47.3167L57.4444 61.3889H33.8333V56.6667H53.0291C53.4562 56.6664 53.8752 56.5504 54.2416 56.3309C54.6079 56.1113 54.9078 55.7965 55.1094 55.42C55.311 55.0435 55.4067 54.6193 55.3863 54.1927C55.3659 53.7661 55.2302 53.3531 54.9935 52.9975L50.8002 46.7075C49.94 45.4127 48.7727 44.3509 47.4025 43.6168C46.0323 42.8826 44.5017 42.499 42.9472 42.5H5.49993C4.24752 42.5 3.04641 42.9975 2.16082 43.8831C1.27523 44.7687 0.77771 45.9698 0.77771 47.2222V75.5556C0.77771 78.0604 1.77275 80.4626 3.54392 82.2338C5.3151 84.005 7.71733 85 10.2222 85H55.7397C57.7589 85.0005 59.755 84.5693 61.594 83.7353C63.4329 82.9013 65.0724 81.6838 66.4024 80.1644L95.2222 47.2222L88.3655 44.9367C86.1222 44.1889 83.7273 44.0149 81.3995 44.4307C79.0717 44.8464 76.8851 45.8386 75.0394 47.3167ZM82.2738 20.7306C84.4035 18.5347 85.721 15.4983 85.721 12.1456C85.721 8.79278 84.4035 5.75639 82.2738 3.56056C81.1968 2.43656 79.9037 1.54179 78.4723 0.929937C77.0409 0.318086 75.5005 0.00177856 73.9438 3.04189e-07C73.9438 3.04189e-07 68.0694 -0.0141673 62.1666 6.07278C56.2638 -0.0141673 50.3894 3.04189e-07 50.3894 3.04189e-07C48.8331 0.00197939 47.2933 0.317914 45.862 0.928897C44.4306 1.53988 43.1373 2.43335 42.0594 3.55583C39.9297 5.75639 38.6122 8.78806 38.6122 12.1408C38.6122 15.4936 39.9297 18.5347 42.0594 20.7258L62.1666 42.5L82.2738 20.7306Z"
      fill="white"
    />
  </svg>
);

const Quote = () => (
  <svg
    width="64"
    height="56"
    viewBox="0 0 64 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M58 0H42C38.6875 0 36 2.6875 36 6V22C36 25.3125 38.6875 28 42 28H52V36C52 40.4125 48.4125 44 44 44H43C41.3375 44 40 45.3375 40 47V53C40 54.6625 41.3375 56 43 56H44C55.05 56 64 47.05 64 36V6C64 2.6875 61.3125 0 58 0ZM22 0H6C2.6875 0 0 2.6875 0 6V22C0 25.3125 2.6875 28 6 28H16V36C16 40.4125 12.4125 44 8 44H7C5.3375 44 4 45.3375 4 47V53C4 54.6625 5.3375 56 7 56H8C19.05 56 28 47.05 28 36V6C28 2.6875 25.3125 0 22 0Z"
      fill="#E80004"
      fillOpacity="0.2"
    />
  </svg>
);

const YoutubeRed = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="59"
    height="42"
    fill="none"
    viewBox="0 0 59 42"
  >
    <g clipPath="url(#clip0_176_1157)">
      <path
        fill="red"
        d="M57.69 6.47a7.416 7.416 0 00-5.22-5.222C47.892 0 29.47 0 29.47 0S11.044.038 6.466 1.286a7.415 7.415 0 00-5.22 5.221c-1.385 8.134-1.922 20.527.038 28.335a7.415 7.415 0 005.22 5.221c4.578 1.248 23.002 1.248 23.002 1.248s18.423 0 23-1.248a7.415 7.415 0 005.221-5.22c1.46-8.146 1.91-20.531-.037-28.374z"
      ></path>
      <path
        fill="#fff"
        d="M23.606 29.508l15.284-8.852-15.284-8.853v17.705z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_176_1157">
        <path fill="#fff" d="M0 0H59V41.476H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

const PhoneBig = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="55"
    fill="none"
    viewBox="0 0 56 55"
  >
    <path
      stroke="#E5322C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="5"
      d="M45 22.5l8-8-8-8m-42-4c0 34 16 50 50 50v-16l-14-4-4 6c-8 0-18-10-18-18l6-4-4-14H3zm32 12h18-18z"
    ></path>
  </svg>
);

const Deadline = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00001 1.83325C4.32401 1.83325 1.33334 4.82392 1.33334 8.49992C1.33334 12.1759 4.32401 15.1666 8.00001 15.1666C11.676 15.1666 14.6667 12.1759 14.6667 8.49992C14.6667 4.82392 11.676 1.83325 8.00001 1.83325ZM8.00001 13.8333C5.05934 13.8333 2.66668 11.4406 2.66668 8.49992C2.66668 5.55925 5.05934 3.16659 8.00001 3.16659C10.9407 3.16659 13.3333 5.55925 13.3333 8.49992C13.3333 11.4406 10.9407 13.8333 8.00001 13.8333Z"
      fill="#E5322C"
    />
    <path
      d="M8.66668 5.16675H7.33334V8.77608L9.52868 10.9714L10.4713 10.0287L8.66668 8.22408V5.16675Z"
      fill="#E5322C"
    />
  </svg>
);

const Message = () => (
  <svg
    width="48"
    height="40"
    viewBox="0 0 48 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0C5.87827 0 3.84344 0.842854 2.34315 2.34315C0.842854 3.84344 0 5.87827 0 8V8.804L24 21.728L48 8.808V8C48 5.87827 47.1571 3.84344 45.6569 2.34315C44.1566 0.842854 42.1217 0 40 0H8ZM48 13.348L24.948 25.76C24.6566 25.9168 24.3309 25.999 24 25.999C23.6691 25.999 23.3434 25.9168 23.052 25.76L0 13.348V32C0 34.1217 0.842854 36.1566 2.34315 37.6569C3.84344 39.1571 5.87827 40 8 40H40C42.1217 40 44.1566 39.1571 45.6569 37.6569C47.1571 36.1566 48 34.1217 48 32V13.348Z"
      fill="#E5322C"
    />
  </svg>
);

const LocationMap = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45.3333 15.5C45.3333 22.325 37.2111 34.4875 33.6444 39.3875C32.7889 40.7 31.2111 40.7 30.3556 39.3875C26.7889 34.4875 18.6667 22.325 18.6667 15.5C18.6667 7.21625 24.6333 0.5 32 0.5C39.3667 0.5 45.3333 7.21625 45.3333 15.5ZM32 19.5C34.4556 19.5 36.4444 17.2625 36.4444 14.5C36.4444 11.7388 34.4556 9.5 32 9.5C29.5444 9.5 27.5556 11.7388 27.5556 14.5C27.5556 17.2625 29.5444 19.5 32 19.5ZM47.2889 22.975C47.3444 22.825 47.4 22.675 47.4556 22.5125L60.3444 16.7125C62.1 15.925 64 17.375 64 19.5V53.35C64 54.575 63.3333 55.675 62.3222 56.1375L46.2222 63.375V25.55C46.6111 24.6875 46.9667 23.8375 47.2889 22.975ZM16.7111 22.975C17.0333 23.8375 17.3889 24.6875 17.7778 25.55V56.975L3.65667 63.3375C1.90556 64.0125 0 62.675 0 60.55V26.7C0 25.475 0.663889 24.2625 1.67667 23.9125L15.2889 17.7875C15.5556 19.5625 16.1 21.325 16.7111 22.975ZM36.4222 41.8875C37.9667 39.825 40.3889 36.2875 42.6667 32.375V63.5375L21.3333 56.675V32.375C23.6111 36.2875 26.0333 39.825 27.5778 41.8875C29.8556 45.2 34.1444 45.2 36.4222 41.8875Z"
      fill="#E5322C"
    />
  </svg>
);

const Experience = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.02851 16.4401C5.60151 16.2551 4.13251 15.6431 3.06251 14.7866C0.653508 12.8646 -0.439992 9.82806 0.185008 6.81256C0.453008 5.51056 1.15101 4.14056 2.04451 3.15356C2.70271 2.41281 3.49645 1.80473 4.38301 1.36206C5.56001 0.765559 6.68501 0.497559 8.01301 0.497559C8.96601 0.497559 9.73201 0.622559 10.6095 0.922059C11.7623 1.31748 12.8096 1.97087 13.6716 2.83243C14.5336 3.69398 15.1875 4.74096 15.5835 5.89356C16.0525 7.26856 16.138 8.73206 15.8385 10.1826C15.599 11.3286 14.9815 12.6176 14.2215 13.5496C13.909 13.9351 13.19 14.6226 12.8125 14.9011C11.6832 15.7398 10.355 16.2702 8.95851 16.4401C8.54701 16.4921 7.42701 16.4896 7.02901 16.4401H7.02851ZM9.20851 15.7711C11.1577 15.4444 12.8972 14.3568 14.0445 12.7476C15.396 10.8491 15.758 8.30206 14.995 6.08106C14.8155 5.56006 14.37 4.69056 14.0445 4.23206C13.6825 3.71906 12.7865 2.82056 12.271 2.45856C11.771 2.10456 10.9195 1.67456 10.3385 1.48456C9.28975 1.13613 8.17611 1.0278 7.07986 1.16756C5.98362 1.30733 4.93279 1.69163 4.00501 2.29206C3.13209 2.86547 2.38592 3.61164 1.81251 4.48456C1.21223 5.41184 0.828007 6.46216 0.688238 7.5579C0.548469 8.65364 0.656726 9.76678 1.00501 10.8151C1.19751 11.3956 1.62751 12.2501 1.97901 12.7501C2.34351 13.2631 3.23951 14.1616 3.75251 14.5236C4.21351 14.8466 5.08051 15.2916 5.60151 15.4741C6.76115 15.868 8.00004 15.97 9.20851 15.7711ZM6.43751 13.0886C6.06368 13.0322 5.70504 12.9011 5.38301 12.7031C5.09401 12.5181 2.91151 10.3801 2.80501 10.1796C2.68251 9.95056 2.89601 9.53356 3.20101 9.40606L3.34401 9.34606L2.90401 8.89806C2.66201 8.65056 2.43251 8.38756 2.39601 8.31456C2.31001 8.14806 2.30751 7.79106 2.38801 7.63206C2.42201 7.56706 2.50251 7.46806 2.56501 7.41306C2.67201 7.32456 2.68201 7.29306 2.67201 7.06906C2.65901 6.87106 2.67701 6.79306 2.76301 6.64456C2.88801 6.43106 3.14601 6.28756 3.39851 6.28506C3.53901 6.28506 3.57551 6.26706 3.63551 6.16256C3.79201 5.88906 4.23951 5.79006 4.58101 5.95706L4.76601 6.04556L4.85701 5.95706C4.98201 5.84256 5.23201 5.74106 5.39601 5.74106C5.72401 5.74106 6.18751 6.11856 6.18751 6.38406C6.18751 6.70156 5.89851 6.75656 5.61201 6.49356C5.42201 6.31656 5.32551 6.29806 5.24751 6.42306C5.20851 6.48306 5.30201 6.59506 5.86201 7.16006C6.42201 7.72256 6.52351 7.84256 6.52351 7.94906C6.51908 8.03069 6.48433 8.10773 6.42606 8.16508C6.36779 8.22242 6.2902 8.25594 6.20851 8.25906C6.10701 8.25906 5.94051 8.11306 5.17201 7.34756C4.38801 6.56606 4.24501 6.44106 4.18251 6.48056C4.01301 6.58756 4.07051 6.66556 4.98701 7.58456C5.48451 8.08456 5.89351 8.52706 5.89351 8.56906C5.89351 8.65506 5.81551 8.81406 5.75051 8.85556C5.69719 8.87897 5.63918 8.88976 5.58101 8.88706C5.47401 8.88956 5.31001 8.74106 4.43801 7.87156C3.56301 7.00156 3.40651 6.86106 3.34401 6.90006C3.17201 7.00956 3.22951 7.08506 4.22701 8.08756C4.77151 8.63206 5.22701 9.11906 5.24001 9.17106C5.26851 9.26506 5.20601 9.42906 5.12301 9.48606C5.06793 9.50948 5.0083 9.52025 4.94851 9.51756C4.84151 9.51756 4.70651 9.40056 3.98501 8.67906C3.28951 7.98356 3.12801 7.84056 3.03951 7.84856C2.78951 7.87706 2.87801 7.98906 4.16951 9.28356C5.28951 10.4061 5.43251 10.5651 5.43251 10.6821C5.43364 10.725 5.42398 10.7676 5.40441 10.8058C5.38484 10.8441 5.356 10.8768 5.32051 10.9011C5.12001 11.0601 5.04201 11.0236 4.53651 10.5341C4.27851 10.2866 4.01301 10.0471 3.94251 10.0026C3.81501 9.92456 3.49201 9.89056 3.43201 9.95306C3.41101 9.97106 3.88751 10.4741 4.48951 11.0701C5.49201 12.0621 5.60651 12.1641 5.90101 12.3046C6.17231 12.4397 6.4711 12.5104 6.77417 12.5113C7.07725 12.5121 7.37644 12.4431 7.64851 12.3096C8.48951 11.9086 8.95601 10.9346 8.72651 10.0516C8.61201 9.61156 8.46851 9.40056 7.89051 8.80406C7.22401 8.12156 7.07001 7.93406 6.90601 7.60606C6.72351 7.23906 6.64551 6.88206 6.64551 6.43656C6.64551 5.95456 6.69501 5.73606 6.90851 5.28556C7.11151 4.85606 7.53601 4.40556 7.95551 4.17356C8.77851 3.71506 9.86201 3.75406 10.648 4.26756C10.8045 4.36906 11.3695 4.90056 12.0725 5.60606C13.117 6.65306 13.2365 6.78856 13.2365 6.90806C13.2365 7.19206 13.0045 7.50706 12.747 7.57206C12.6505 7.59806 12.669 7.62406 13.1065 8.06956C13.3615 8.32756 13.5985 8.60606 13.635 8.69206C13.7575 8.98656 13.7025 9.27256 13.4785 9.50706C13.364 9.62706 13.3485 9.66856 13.3455 9.90806C13.343 10.1191 13.3195 10.2076 13.236 10.3276C13.1701 10.4252 13.0818 10.5056 12.9784 10.5623C12.8751 10.6189 12.7598 10.65 12.642 10.6531C12.4805 10.6531 12.4495 10.6686 12.3685 10.7911C12.186 11.0726 11.712 11.1711 11.405 10.9891L11.2515 10.8981L11.142 11.0051C10.9 11.2371 10.509 11.2681 10.2125 11.0781C9.97301 10.9271 9.79601 10.7161 9.79601 10.5831C9.79601 10.4661 9.96551 10.2731 10.0695 10.2731C10.1685 10.2731 10.3015 10.3511 10.4525 10.4921C10.6035 10.6351 10.734 10.6351 10.7545 10.4896C10.765 10.4116 10.64 10.2631 10.1345 9.75506C9.60301 9.21856 9.50151 9.09606 9.50151 8.99206C9.50032 8.934 9.51104 8.87631 9.53301 8.82256C9.59051 8.73656 9.75201 8.67656 9.85051 8.70256C9.90251 8.71556 10.3425 9.12206 10.8245 9.60356C11.309 10.0881 11.7335 10.4836 11.7725 10.4836C11.8795 10.4836 11.9495 10.3766 11.9 10.2856C11.8765 10.2441 11.4675 9.82456 10.9935 9.35056C10.2515 8.61106 10.1315 8.47306 10.1315 8.36356C10.1291 8.3046 10.1398 8.24583 10.163 8.19156C10.2075 8.12656 10.3635 8.04856 10.452 8.04856C10.491 8.04856 10.9805 8.50406 11.5405 9.06156C12.5665 10.0826 12.642 10.1396 12.749 9.97056C12.788 9.90806 12.6475 9.74906 11.7775 8.87656C10.879 7.97556 10.7595 7.84006 10.7595 7.72306C10.7595 7.64256 10.796 7.55906 10.8535 7.50706C11.0435 7.32756 11.101 7.36406 12.0255 8.28306C12.9005 9.15556 12.9785 9.21256 13.0855 9.04606C13.1245 8.98356 12.9475 8.79106 11.8615 7.70206C10.679 6.51456 10.5935 6.41806 10.5935 6.28006C10.5935 6.07156 10.7135 5.97256 10.945 5.98856C10.9865 5.99106 11.2365 6.20206 11.4945 6.45456C11.755 6.70706 12.036 6.94406 12.1195 6.98056C12.2835 7.04806 12.4735 7.05856 12.5545 7.00656C12.6325 6.95706 10.471 4.82956 10.19 4.68106C9.94907 4.55102 9.68407 4.47166 9.41132 4.44788C9.13857 4.42409 8.86383 4.45637 8.60403 4.54274C8.34422 4.62911 8.10483 4.76774 7.90061 4.95009C7.69638 5.13244 7.53164 5.35465 7.41651 5.60306C7.28101 5.89206 7.26301 5.97806 7.24451 6.35056C7.22901 6.70206 7.24201 6.81156 7.31751 7.03556C7.45301 7.43406 7.57001 7.59806 8.17701 8.21806C8.83351 8.89006 8.95851 9.04356 9.12501 9.40306C9.59401 10.4031 9.39601 11.5596 8.62251 12.3301C8.03401 12.9211 7.23201 13.1971 6.43751 13.0881V13.0886Z"
      fill="#E5322C"
    />
  </svg>
);

const Positions = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2.50008C2.00048 2.14043 2.07856 1.78511 2.22889 1.45839C2.37923 1.13166 2.5983 0.841225 2.87113 0.606895C3.14397 0.372564 3.46415 0.199861 3.80983 0.100572C4.15551 0.00128402 4.51853 -0.0222514 4.87414 0.0315727C5.22974 0.0853967 5.56954 0.215313 5.87035 0.412453C6.17116 0.609594 6.42589 0.869317 6.61716 1.17389C6.80842 1.47847 6.93172 1.82073 6.97864 2.17731C7.02555 2.53389 6.99498 2.89639 6.889 3.24008C5.86276 3.55523 4.95103 4.16351 4.266 4.99008C3.64603 4.93179 3.07014 4.64424 2.65102 4.1837C2.23191 3.72315 1.99976 3.12278 2 2.50008ZM4.5 1.00008C4.10218 1.00008 3.72064 1.15811 3.43934 1.43942C3.15804 1.72072 3 2.10225 3 2.50008C3 2.8979 3.15804 3.27943 3.43934 3.56074C3.72064 3.84204 4.10218 4.00008 4.5 4.00008C4.89782 4.00008 5.27936 3.84204 5.56066 3.56074C5.84196 3.27943 6 2.8979 6 2.50008C6 2.10225 5.84196 1.72072 5.56066 1.43942C5.27936 1.15811 4.89782 1.00008 4.5 1.00008ZM8.5 13.0001C9.09095 13.0001 9.67611 12.8837 10.2221 12.6575C10.768 12.4314 11.2641 12.0999 11.682 11.6821C12.0998 11.2642 12.4313 10.7681 12.6575 10.2222C12.8836 9.67619 13 9.09103 13 8.50008C13 7.90913 12.8836 7.32397 12.6575 6.778C12.4313 6.23204 12.0998 5.73596 11.682 5.3181C11.2641 4.90023 10.768 4.56877 10.2221 4.34262C9.67611 4.11647 9.09095 4.00008 8.5 4.00008C7.30653 4.00008 6.16193 4.47418 5.31802 5.3181C4.47411 6.16201 4 7.3066 4 8.50008C4 9.69355 4.47411 10.8381 5.31802 11.6821C6.16193 12.526 7.30653 13.0001 8.5 13.0001ZM10.854 6.64608C10.9006 6.69252 10.9375 6.7477 10.9627 6.80844C10.9879 6.86919 11.0009 6.93431 11.0009 7.00008C11.0009 7.06585 10.9879 7.13097 10.9627 7.19171C10.9375 7.25246 10.9006 7.30763 10.854 7.35408L7.854 10.3541C7.80755 10.4006 7.75238 10.4376 7.69163 10.4628C7.63089 10.488 7.56577 10.501 7.5 10.501C7.43423 10.501 7.36911 10.488 7.30837 10.4628C7.24762 10.4376 7.19245 10.4006 7.146 10.3541L6.146 9.35408C6.05211 9.26019 5.99937 9.13285 5.99937 9.00008C5.99937 8.8673 6.05211 8.73996 6.146 8.64608C6.23989 8.55219 6.36722 8.49945 6.5 8.49945C6.63278 8.49945 6.76011 8.55219 6.854 8.64608L7.5 9.29308L10.146 6.64608C10.1924 6.59951 10.2476 6.56257 10.3084 6.53737C10.3691 6.51216 10.4342 6.49918 10.5 6.49918C10.5658 6.49918 10.6309 6.51216 10.6916 6.53737C10.7524 6.56257 10.8076 6.59951 10.854 6.64608ZM3.6 6.00008H1.5C0.672 6.00008 0 6.95508 0 7.75008V8.00008C0 9.73008 1.554 11.6401 4.22 11.9551C3.93261 11.5992 3.69074 11.2088 3.5 10.7931C1.815 10.2901 1 8.97808 1 8.00008V7.75008C1 7.61008 1.07 7.38908 1.22 7.20308C1.37 7.01508 1.484 7.00008 1.5 7.00008H3.207C3.306 6.65108 3.437 6.31708 3.6 6.00008Z"
      fill="#E5322C"
    />
  </svg>
);

const Icons = {
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronRight,
  CloseCircle,
  Deadline,
  Experience,
  Facebook,
  LinkedIn,
  LocationMap,
  Medical,
  Menu,
  Message,
  Partner,
  PhoneBig,
  Positions,
  Quote,
  Support,
  Twitter,
  Youtube,
  YoutubeRed,
  Volunteer,
};

export default Icons;
