import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 960 560"
      xmlSpace="preserve"
      {...props}
    >
      <path
        className="st0"
        d="M71 34V5h745.9v542H458c.5-3 3.3-2.4 5.1-2.9 4.4-1.2 8.7-2.2 11.2-6.6.8-1.4 2.4-1.6 4-1.7 2.2-.1 4.3-.1 6.5-.1h301.4c5.2 0 10.3-.3 15-2.8 5.1-2.7 8.7-6.6 10.5-12.1 1.9-5.9 2.8-12 2.8-18.2.1-121.8 0-243.6 0-365.4 0-6.6-.2-6.7-6.7-6.7-32.2 0-64.3 0-96.5.1-23.1.1-44.3-6.7-63.6-19.1-15.3-9.8-28.6-22.3-43.4-32.7-13.8-9.7-28-18.7-44.7-22.5-6.6-1.5-13.3-2.8-20.2-2.8-19-.1-38 0-57 0-6.9 0-8.2-.9-7.7-7.8.7-10-.6-19.9-.1-29.9.2-3.6-1.2-5.5-4.8-6.4-4.9-1.1-9.7-2-14.8-2-112.1.1-224.3.1-336.4 0-8.9 0-17.6.7-26 3.7-9.1 3.3-15.1 9.4-18.5 18.3-.6 1.7-.4 4.3-3.1 4.6z"
      />
      <path
        className="st1"
        d="M71 34c.3-.4.7-.7.8-1.1 3.4-14 12.5-22.1 26.2-24.8 6.6-1.3 13.5-2 20.3-2 113-.1 226-.1 339-.1 6.4 0 12.4 1.6 18.8 3.8V52h4.2c19.3 0 38.7 0 58 .2 16.1.1 31.2 4.1 45.3 11.8 15 8.1 28.4 18.5 41.7 29 10.1 7.9 19.8 16.2 31.3 22.1 17.5 9.1 36.1 14.3 55.9 14.3 32.5 0 65-.2 97.4-.4h5.8c.1 2.3.2 4.1.2 5.9v106.5c0 86.1 0 172.3-.1 258.4 0 6.1-.8 12.3-2 18.3-2 10.5-10.4 18.2-21.7 18.6-3 .1-6 .4-9 .4H475.4c-.7 4.3-3.9 6-7.5 7-3 .9-6.1 1.4-9.2 2.1-.4.1-.6.6-.9.9h-365c-13.9-3.1-20.3-12.6-22-26C71 358.7 71 196.3 71 34z"
      />
      <path
        className="st2"
        d="M71 521c.6 1.6 1.4 3.2 1.8 4.8 2.8 10.1 9 17.1 19.2 20.3.4.1.7.6 1 .9H71v-26z"
      />
      <path
        className="st3"
        d="M414 525H123.1c-3.7 0-7.3-.1-11 .3-8.3.8-14-5.5-15-13.4-.3-2-.2-4-.2-6 0-2.2.2-4.3.2-6.5V143c0-3.5-.2-7-.2-10.5 0-2.3 0-4.7.5-6.9.8-3.5 2.4-4.5 6.1-4.6 3.7-.1 7.3 0 11 0 24.7 0 49.3-.1 74 .2 15.8.1 30.9-3.4 45.5-9.1 14.6-5.7 27.1-14.6 39-24.4 14.7-12.2 29.8-23.8 46-34.1 6-3.8 12.3-7.3 19.4-8.8 1.6-.3 3.2-.7 4.9-.7h64c5.5 0 8.3 2.5 8.9 7.9.2 1.8.1 3.7.1 5.5-.1 54-.1 108-.2 162-.2 68-.6 135.9-.9 203.9-.1 15.7 0 31.3-.1 47-.1 17.5-.4 34.9-.7 52.4-.2.4-.3 1.1-.4 2.2z"
      />
      <path
        className="st4"
        d="M474 483.6c-10.1-7.5-34.7-7.7-47-1.1v-5.1c0-127.8 0-255.6-.1-383.4 0-4.2 1.2-6.7 5.1-7.9 2.8-.9 5.7-1.9 8.6-2.1 6.3-.3 12.6-.1 19-.1 4.1 0 7.7 1.9 11.2 3.8 2.5 1.4 2.8 3.9 3.3 6.3.2 1.1 0 2.3 0 3.5v380.4c-.1 1.9-.1 3.7-.1 5.7z"
      />
      <path
        className="st3"
        d="M473.9 11.5v21.4c-3.6-1.4-6.9-3.2-10.3-3.8-5.5-.9-11.2-1.2-16.8-1.2-25-.1-50-.1-75 .1-8.1.1-16.2.7-24.3 1.8-12.6 1.8-24.2 6.8-35.1 13.2-13.3 8-25.6 17.5-37.7 27-9.3 7.3-18.4 14.8-28.8 20.4-7.6 4.1-15.5 7.6-23.9 9.8-1.8.5-3.9.1-5.4 1-1.8.9-3.3 2.3-5.4.9-2.3 3.4-6 .5-8.9 2.2-1.9 1.1-4.6.8-7 .8-4.4 0-8.7.2-13.1.2-4.5-.1-9-.2-13.5-.2h-68c-1.3 0-2.7.1-4-.1-3.4-.4-4.7-1.7-4.7-5.1 0-22.5-.4-45 .1-67.5.3-11.9 6.4-20.6 19.9-23.4 2.9-.6 5.9-.9 8.9-.9 111.5 0 223 0 334.5-.1 6.3 0 12.4 1.2 18.5 3.5zM476.2 535V54.2c1.2-.1 2.4-.2 3.5-.2 20.2 0 40.3-.3 60.5.2 16.5.4 31.8 5.6 46.2 13.6 13.7 7.7 26 17.3 38.1 27.1 11.9 9.6 23.9 19 38 25.3 10.8 4.8 22 8.1 33.7 9.9 8.6 1.3 17.2 2 25.8 1.5 29.8-1.6 59.6-.3 89.4-.7.6 0 1.3.1 2.3.1.1 1.5.2 2.9.2 4.4 0 121.7.1 243.3-.1 365 0 6.9-.4 14-3 20.5-3.2 7.9-8.6 12.9-17.5 13.2-5.8.2-11.6.7-17.4.7H482.4c-1.9.2-3.8.2-6.2.2z"
      />
      <path
        className="st3"
        d="M415 44.1h10v368.8c0 40.8-.1 81.6 0 123-1.9.1-3.5.2-5 .2-59.8-.1-119.7 0-179.5-.2-43.5-.1-86.9-.6-130.4-.8-6.4 0-12-2.1-16.1-6.7-3-3.3-5.3-7.5-5.9-12.2-.6-4.8-1.1-9.6-1.1-14.4-.1-125.3 0-250.6 0-376v-4.6h9.8c-2 4.5-3.4 9-1.9 14 .4 1.2.1 2.6.1 4v361.5c0 3.8-.3 7.6.1 11.3 1.1 10.9 9.3 16.7 20.2 15.7 2.3-.2 4.6-.6 6.9-.6h294.4c.1-1.6.2-3.1.2-4.5.1-33.7.2-67.3.2-101 .1-41.8 0-83.7.1-125.5.2-68.1.6-136.3.9-204.4 0-11.5 0-23 .2-34.5 0-4.6-.3-9-3.2-13.1z"
      />
      <path
        className="st5"
        d="M76.4 529.2c-2.1-5.1-3.5-9.6-3.5-14.5v-12.5-450c0-3.8-.2-7.7-.1-11.5.3-13.4 6.4-23.1 18.7-28.5 3.7-1.6 7.8-2.3 11.9-3.1-5.4 3.2-9.2 7.5-11.2 13.2-1.1 3.2-2.2 6.7-2.2 10-.2 22.7-.1 45.3-.1 68 0 1.3.2 2.6.3 4.1-4.1 1.3-5.4 4.5-5.4 9 .2 40.3.2 80.4.2 120.6v262c0 15.4 0 15.4-6.8 29.4-.5 1.1-1 2.1-1.8 3.8z"
      />
      <path
        className="st6"
        d="M432.7 544.8H108.5c1.4-2.9 2.7-5.2 4-7.8h5.1c36.5 0 73-.6 109.5.2 64.3 1.4 128.6.3 192.9.8 2.3 0 4 .4 5.7 2.2 2.1 1.9 4.8 3.2 7 4.6z"
      />
      <path
        className="st4"
        d="M474 66.4c-15.6-7.5-31.1-7.1-47-.9 0-9.4-.1-18.8.1-28.3 0-1 1-2.6 2-3 3.6-1.6 7.3-3.7 11.1-3.9 7.6-.5 15.3-1.4 22.8.7 2.7.7 5.3 1.9 7.8 3.2 2.4 1.3 3.3 3.7 3.3 6.3-.1 8.7-.1 17.3-.1 25.9zM474 532.6c-15.6-6.7-30.9-6.5-46.7-1-.1-.7-.3-1.8-.3-2.8 0-6.3.2-12.7-.1-19-.1-3.2 1.2-4.7 3.8-6.1 3.9-2.1 8.2-2.8 12.4-3.2 9-.9 17.9-.7 26.2 3.5 3.2 1.6 4.6 4.2 4.6 7.5.1 7 .1 14 .1 21.1z"
      />
      <path
        className="st6"
        d="M87 118.8c0-2.9-.1-5.4 0-7.8.1-2.3 1.5-3.6 3.8-3.9.7-.1 1.3-.1 2-.1h80.9c1 0 1.9.1 3.2.2-.3 4.5-2.5 7.9-4.4 11.6H87zM207 117c1.4-3.8 2.8-7.7 4.4-11.4.2-.4 1.4-.4 3-.8-1.5 4-2.6 7.2-3.8 10.4 3.3-1.4 4.2-4.2 5-6.8 1.1-3.6 3.1-5.2 6.7-6.2 16.3-4.5 30.7-12.5 44-22.9 12.3-9.7 24.9-19 37.4-28.5.5-.4 1.1-.6 2.5-1.3-.5 2.1-.9 3.5-1.2 4.8-1.6 5.5-4.5 9.7-9.5 13.1-10 7-19.5 14.8-29 22.5-14.7 11.9-30.8 20.9-49.4 25.1-3 .7-6.1 1.3-9.1 1.9-.3.5-.6.5-1 .1zM341.9 41.7c1.2-3.3 2.3-6.2 3.6-9.7 3.3-.3 6.8-.8 10.4-1.1 23.4-1.6 46.8-.8 70.3-1h5.7c-1.8 1.1-3.1 1.7-4.2 2.7-1.3 1.2-2.8 2.5-3.3 4-.4 1.3.5 3.1.8 5-27.8.1-55.2.1-83.3.1z"
      />
      <path
        className="st4"
        d="M459.8 480.2v18.5c-11.3-1.5-22.2-1.2-32.8 4.4v-15.8c0-1.8.8-2.8 2.4-3.3 3.6-1.2 7.1-2.8 10.7-3.5 6.4-1.1 12.8-.5 19.7-.3zM427.1 85.9V68.5c10.2-6.5 21.2-5.9 32.6-4.8v18.1c-11.2-1.1-22.1-1.2-32.6 4.1z"
      />
      <path
        className="st6"
        d="M450.3 529.5c4.6.5 9.2.7 13.7 1.6 2.5.5 5 1.8 7.2 3.1 2.4 1.4 2.5 3.9.2 5.7-1 .8-2.2 1.5-3.4 1.9-11.4 4.2-22.9 4.1-34.5.8-1.7-.5-3.4-1.4-4.8-2.4-2.7-1.9-2.4-4.5.5-6.3 4.3-2.7 9.1-3.8 14.1-3.9h7v-.5z"
      />
      <path
        className="st4"
        d="M462.2 82.3V64c1.7.5 3.1.9 4.7 1.3V83c-1.7-.2-3.1-.4-4.7-.7zM462.2 498.9v-18.1c1.8.5 3.2 1 4.6 1.4v18.1c-1.7-.6-3.1-1-4.6-1.4zM474 87.2c-2-1.1-3.4-1.9-4.7-2.7V66.8c3.5 1.5 4.6 4.1 4.7 7.2.1 4.2 0 8.3 0 13.2zM474 504.1c-1.9-1.1-3.4-1.8-4.7-2.6v-17.7c3.7 1.3 4.6 4.1 4.7 7.1.1 4.1 0 8.3 0 13.2z"
      />
      <path
        className="st7"
        d="M85.4 515.1c2 3.5 1.3 6.4-.2 9.3-1.7 3.4-3.2 7.1-5 11.3-1.3-1.7-2.1-2.8-2.7-3.5 2.7-5.9 5.3-11.3 7.9-17.1z"
      />
      <path
        className="st8"
        d="M305.2 59.7c1.5-4 2.8-8.2 4.7-12 .8-1.5 2.8-2.4 5-3.2-1.4 3.9-2.4 8-4.2 11.7-.8 1.7-3.1 2.7-4.7 3.9-.3-.1-.6-.3-.8-.4z"
      />
      <path
        className="st9"
        d="M179.6 118.9h-3.9c0-.4-.2-.7-.1-1 1.1-2.6 2.2-5.1 3.3-7.7.8-1.9 1.9-3.5 4.8-3-.2 4.3-3.2 7.5-4.1 11.7z"
      />
      <path
        className="st10"
        d="M83.6 539.2c-.5-.9-1.6-2-1.4-2.5 1.7-4.2 3.7-8.3 6.1-12.2 2.6 5.8-2.3 9.6-3.5 14.4-.4 0-.8.1-1.2.3z"
      />
      <path
        className="st9"
        d="M182 118.2l3.9-9c.8-1.9 1.9-2.5 4.4-1.5-1.5 3.5-2.8 7-4.5 10.3-.4.8-2.1.9-3.2 1.3-.1-.4-.3-.7-.6-1.1z"
      />
      <path
        className="st11"
        d="M207 117h1c-3.1 1.2-3.1 1.2-7.4.4 1.5-3.5 2.8-7 4.5-10.3.4-.8 2.1-.9 3.7-1.5-1.5 3.6-2.7 6.3-3.8 9-.5 1.6.2 2.5 2 2.4z"
      />
      <path
        className="st10"
        d="M187.9 119.7c5.3-12.3 5.3-12.3 8.7-12-1.6 3.6-2.9 7-4.6 10.3-.5.8-2.1.9-4.1 1.7z"
      />
      <path
        className="st11"
        d="M86.2 540.8c1.8-3.9 3.5-7.4 5.1-10.9 1.7.7 2.9 1.2 2.2 3-1.1 2.6-2.2 5.1-3.3 7.7-1 2.3-2.3 1.7-4 .2z"
      />
      <path
        className="st7"
        d="M197.9 118.8h-3.6c1.6-3.6 3-6.9 4.5-10.2.5-1.2.6-1.2 3.5-1.2-1.5 3.9-2.9 7.5-4.4 11.4z"
      />
      <path
        className="st12"
        d="M314 53.4c1.2-3.2 2.4-6.3 3.5-9.5.7-1.9 2.1-2.6 4.7-2.9-2.4 4.9-2.7 10.2-7.3 13l-.9-.6z"
      />
      <path
        className="st8"
        d="M335.7 35.5c-1.3 4.1-1.7 8.9-8 10.8 3-4.2 2.1-9.8 8-10.8z"
      />
      <path
        className="st9"
        d="M95.9 545.4c1.6-3.3 2.7-5.7 4-8 .4-.6 1.5-.8 2.2-1.2.3.7 1 1.5.8 2.1-.8 2.1-1.7 4.3-3 6.2-.4.5-1.9.4-4 .9z"
      />
      <path
        className="st13"
        d="M322.3 48.9c-.6-3.1 1.7-5.2 2.3-7.8.2-1 1.1-1.9 1.9-2.7.4-.4 1.2-.3 1.9-.4-1.5 7.1-2.5 9-6.1 10.9z"
      />
      <path
        className="st14"
        d="M335.9 42.5c1.9-3.4 1.4-8.1 6.5-9.8-1.7 8.8-2.4 9.9-6.5 9.8z"
      />
      <path
        className="st15"
        d="M91.5 543.3c1.2-2.7 2.3-5.5 3.5-8.2.3-.5 1.2-.8 1.8-1.1.3.8 1 1.7.8 2.4-.7 2.2-1.6 4.3-2.8 6.3-.5.8-1.9 1.1-2.9 1.6-.1-.3-.2-.6-.4-1z"
      />
      <path
        className="st8"
        d="M110.3 536.7c-2.6 3.5-2.6 7.8-7 9.3-.2-3.4 1-6 2.7-8.3.6-.7 2.3-.5 4.3-1z"
      />
      <path
        className="st1"
        d="M483 178.3c0-9.3 0-18.7-.1-28-.2-22.5-.5-44.9-.6-67.4 0-2.9.4-6 1.2-8.8 1.4-5 4.3-7 9.5-7.1 7.7-.1 15.3 0 23 0 13 0 26 .1 39 0 7.3-.1 14 2.1 20.3 5.5 17.5 9.4 33.1 21.5 48.6 33.8 11 8.8 21.7 18.1 34.6 24.3 8.1 3.9 16.1 7.8 25.2 8.9 1.4.2 2.6 1.2 4 1.6 11.2 3.1 22.6 3.1 34.1 3 20.3-.1 40.7-.1 61-.1 4.7 0 9.3.2 14-.2 6.8-.5 10.4 1.6 10.4 10.1-.2 58.7-.1 117.3-.1 176v174.5c0 4.6-.6 8.9-2.7 13-3.3 6.4-8.5 9.5-15.6 9.5-99.8 0-199.6.1-299.4.1h-1.5c-3.3-.1-3.5-.4-3.6-3.9v-2c-.1-49.3-.1-98.6-.2-148"
      />
      <path
        className="st16"
        d="M254.3 136h133.5c7.8 0 12 4 12.2 11.8v217.4c0 1.7 0 3.3-.1 5-.5 6.3-4.7 10.4-11 10.7-1.5.1-3 .1-4.5.1-75.3 0-150.6 0-225.9.1-3.4 0-5.8-.8-8.3-3.3-12.1-12.4-24.4-24.6-36.8-36.7-2.5-2.4-3.5-4.8-3.5-8.2.1-60.5.1-121 .1-181.4V147c-.2-7 3.4-10.9 10.4-10.9 44.6-.1 89.3-.1 133.9-.1z"
      />
      <path
        className="st17"
        d="M392.2 383c-2.7 2.2-5.2 3-8.1 3H155.2c-2.5 0-4.3-.7-6.1-2.5-14.2-14.3-28.4-28.6-42.7-42.8-1.7-1.7-2.3-3.4-2.3-5.7.1-60.7 0-121.3.1-182 0-4.2 1.2-8.1 3.9-12.3 0 15.2.1 29.7.1 44.2v88.5c0 20.3.1 40.7-.1 61 0 2.9.8 4.9 2.8 7 12.9 12.7 25.8 25.6 38.6 38.5 2.3 2.4 4.7 3.1 7.9 3.1 77-.1 154-.1 230.9-.1 1 .1 2.2.1 3.9.1z"
      />
      <path
        className="st18"
        d="M349.3 433.1c-.4-4-.7-7.3-1-10.5l-.3-4.5c-.3-3.4-.6-6.9-.9-10.3-.1-1.3-.3-2.7.1-4 .4-1.6 1.2-2.9 3.4-2.9 5.3.2 10.7 0 16 .1 2.7.1 3.6.8 3.4 3.7-.4 6.2-1.1 12.5-1.6 18.7-.2 2.9 0 5.9 0 9.4 2.1 0 4.2.1 6.3 0 3.3-.2 6.6-.6 9.8-.9 3.3-.3 6.5-.8 9.8-.9 4.6-.2 5.7 1 5.7 5.4.1 4 .1 8 0 12-.1 4.3-2.1 5.5-6.3 5.1-8-.8-16.1-1.1-24.2-1.6-1.5 10.1 1 19.6.5 29.9-1.7.4-3.5 1.2-5.3 1.2-4.5.2-9 .1-13.5 0-3.6 0-4.3-.6-4.1-4 .5-6.1 1.3-12.1 1.8-18.2.2-2.8 0-5.6 0-8.8-4.4.1-8.4-.5-12.5.6-1.7.5-3.6.1-5.5.3-2.9.2-5.9.5-8.8.9-2.8.4-5-1.1-5-4-.2-5-.1-10 0-15 .1-2.5 1.6-3.8 4.2-3.9 2 0 3.9.3 5.9.5 7 .6 14 1.1 22.1 1.7z"
      />
      <path
        className="st19"
        d="M219.6 507h-52.9c-4.8 0-6.8-2.1-6.8-7 .1-13.6.1-27.3 0-40.9 0-4.3 1.8-6.5 5.9-7 1.3-.2 2.7-.1 4-.1h99.4c1.3 0 2.7 0 4 .1 3.2.3 5.3 1.9 6 5 .4 1.8.8 3.6.8 5.4.1 11.7.1 23.3 0 35 0 1.6-.4 3.3-.9 4.8-1.1 3.5-2.9 4.7-6.6 4.7h-52.9z"
      />
      <path
        className="st20"
        d="M134.9 390.7c10.4-.1 19 8 19.1 18.2.1 10.8-8 18.7-18.5 19.5-11.1.8-19.8-9.3-19.7-18.1.2-11.7 7.3-19.4 19.1-19.6z"
      />
      <path
        className="st21"
        d="M270.1 405c6.7 0 13.3-.1 20 0 3.9 0 5.8 1.7 6.1 5.1.3 3-.7 4.8-3.5 5.9-1.7.6-3.5 1-5.3 1-11.7.1-23.3.1-35 0-1.8 0-3.6-.4-5.3-1-2.9-1.1-3.9-3.4-3.3-6.5.5-2.7 2.3-4.3 5.2-4.4 7.1-.2 14.1-.1 21.1-.1z"
      />
      <path
        className="st22"
        d="M198.6 417c-5.7 0-11.3.1-17 0-1.9 0-4-.4-5.8-1-2.7-.9-4.2-3.7-3.8-6.3.4-2.5 2.8-4.6 5.6-4.7 14-.1 27.9-.1 41.9 0 2.9 0 5.2 2.1 5.5 4.7.4 2.8-.9 5.3-3.7 6.2-1.7.6-3.5.9-5.3 1-5.8.2-11.6.1-17.4.1z"
      />
      <path
        className="st23"
        d="M140.6 93.4c-17.7 1-39.5-15-39.4-39.8.1-20.2 16.6-39.5 39.9-39.4 23.3.1 39.7 19.5 39.7 39.7 0 24.5-21.9 40.8-40.2 39.5z"
      />
      <path
        className="st24"
        d="M257.3 17.8c6.1 0 8.9 2.8 8.9 8.7 0 5.4-3.7 9.4-8.7 9.4-4.7 0-9.2-4.4-9.3-9.2-.2-4.8 4-8.9 9.1-8.9z"
      />
      <path
        className="st25"
        d="M194.6 17.8c5.7 0 9.3 3.2 9.3 8.6.1 5.2-4 9.5-9.3 9.5-4.9 0-8.6-4.1-9-9.2-.2-4.6 4-9.8 9-8.9z"
      />
      <path
        className="st26"
        d="M226 17.7c5.7 0 9.1 3.3 9.2 8.8 0 5.2-3.9 9.3-9 9.3-4.9.1-9.2-4.2-9.3-9.1-.1-5.2 3.7-9 9.1-9z"
      />
      <path
        className="st3"
        d="M484.9 78h5.3c18.2 0 36.3.2 54.5-.1 7.9-.1 15.3 1.6 21.9 5.6 10.2 6.2 20.3 12.7 29.9 19.7 11.4 8.3 22.1 17.6 33.3 26.1 15.9 12.2 33.9 19.9 53.6 23.7 11 2.1 22.2 2.6 33.3 1.8 21.6-1.5 43.2-.5 64.9-.8 3.1 0 6.3.3 9.4.8 4.2.6 5.2 2 5.2 6.4 0 116.3 0 232.6-.1 349 0 3.5-.1 7-.8 10.4-.7 3.7-1.7 4.2-5.5 4.4-2.8.1-5.7.1-8.5.1H486.2v-5c-.1-30.8-.2-61.7-.2-92.5-.1-39.2 0-78.3-.2-117.5-.2-65-.6-129.9-.8-194.9-.1-12.2-.1-24.4-.1-37.2z"
      />
      <path
        className="st6"
        d="M798 521.1V508c0-108.8.1-217.6-.1-326.4 0-7.5 2-13.9 6.1-21.1V500c0 3.3.1 6.7-.1 10-.2 4.2-1.6 8-5.9 11.1zM653.7 131.3c-1.2 2.8-2.2 5.2-3.4 7.8-4.8-1.2-8.6-3.8-12.2-6.6-13.3-10.1-26.4-20.4-39.7-30.6-4.6-3.5-9.4-6.8-14.3-9.9-2.1-1.3-2.7-2.7-1.8-4.9.8-1.9 1.6-3.9 2.4-6.1 8.2 4.5 15.1 10.1 22.1 15.5 11.1 8.6 22.1 17.5 33.2 26 4.4 3.3 9.1 5.8 13.7 8.8zM683.6 143c1.4.1 2.7.1 4 .4 7.1 1.9 14.2 2.7 21.5 2.7 25.8-.1 51.6 0 77.4-.1h5.1c-.3 1-.5 1.6-.7 2.2-.9 3-2.8 3.9-5.9 3.9-17.7-.2-35.3-.2-53 0-10.3.1-20.5.9-30.8.8-5.7 0-11.5-1.1-17.2-2-3.3-.5-3.6-1.3-2.3-4.3.6-1.1 1.2-2.3 1.9-3.6zM553.3 69.8c-.8 1.9-1.6 3.8-2.5 5.9h-64.3c1-4.5 3-6.7 7.1-6.7 19.5-.1 39 0 58.5 0 .2.1.4.4 1.2.8z"
      />
      <path
        className="st9"
        d="M577.6 76.2c-.9 3.3-1.9 6.3-4.3 9.1-1.2-.9-2.1-1.6-3.2-2.5 1.1-2.7 2.2-5.3 3.4-8.2 1.7.7 2.9 1.1 4.1 1.6z"
      />
      <path
        className="st13"
        d="M575.8 86.7c1.5-3.3 2.6-5.9 4-8.8 1.1.5 2.1 1 3.3 1.5-1.3 3.1-2.4 5.8-3.7 9-1.2-.7-2.3-1.2-3.6-1.7z"
      />
      <path
        className="st9"
        d="M568 71.7c1.6.7 2.4 1.1 3.7 1.6-1.2 2.8-2.3 5.6-3.6 8.5-2.2-.7-3.9-1.2-2.7-3.7.9-2 1.6-3.9 2.6-6.4z"
      />
      <path
        className="st27"
        d="M553.3 75.6c.7-2.2 1.4-4.2 2.2-6.4h4.8c-1.1 2.6-1.8 4.9-3.1 6.9-1 1.6-2.5 1.1-3.9-.5z"
      />
      <path
        className="st7"
        d="M562.5 79.4c-1.5-.6-2.2-.9-3.5-1.4 1.1-2.6 2.1-5.1 3.4-7.5.2-.4 1.9-.1 3.7-.1-1.3 3.4-2.4 6-3.6 9z"
      />
      <path
        className="st28"
        d="M654.8 141.8c-.9-.5-1.6-.8-2.6-1.3 1.2-2.8 2.4-5.5 3.7-8.4 2.8 2.8 2.8 2.8-1.1 9.7z"
      />
      <path
        className="st14"
        d="M798.4 165.6c-.5-5.6 3.2-9.6 5.2-14.2.8 5.7-3.2 9.6-5.2 14.2z"
      />
      <path
        className="st29"
        d="M802.7 147.3c-1.6 3.4-2.9 6.4-4.4 9.6-1.6-.9-2.2-2-1.3-3.9 1.1-2.2 2.2-4.4 3.3-6.8.8.4 1.5.7 2.4 1.1z"
      />
      <path
        className="st12"
        d="M659.9 143.9c-.9-.4-1.6-.8-2.2-1.1 0-.4-.1-.7 0-.9.8-1.9 1.5-3.9 2.5-5.8.3-.5 1.3-.6 1.9-.9.3.7 1 1.5.8 2-.9 2.2-2 4.3-3 6.7z"
      />
      <path
        className="st13"
        d="M791.9 152.3c2-6.1 2-6.1 5.6-5.9-2.5 6.4-2.5 6.4-5.6 5.9z"
      />
      <path
        className="st30"
        d="M677.1 150.5c-1.7-4.2.7-6.5 2-9.5.7.6 1.5 1 1.5 1.4 0 2.7-1.2 5.1-3.5 8.1z"
      />
      <path
        className="st9"
        d="M671 147.2c1.2-2.4 2.4-4.8 3.8-7.8 2.3 3.3.3 5.3-.7 7.3-.4.7-1.4 1.1-2.2 1.6-.3-.4-.6-.7-.9-1.1z"
      />
      <path
        className="st12"
        d="M668.4 147.2c-2.5-1.7-.9-3.1-.4-4.2.6-1.4 1.5-2.7 2.4-4 .1-.1.9.2 1.8.4-1.3 2.7-2.6 5.2-3.8 7.8zM666.8 137.5c-.6 3-.4 6.3-4.3 8.1 1.3-6.1 1.5-6.3 4.3-8.1z"
      />
      <path
        className="st31"
        d="M293.3 370.9c1.4-3.1 3.7-2.6 5.8-2.6h61.3c1.5 0 3 .2 4.3.7.6.2.8 1.4 1.7 3H295c-.4-.1-1-.7-1.7-1.1z"
      />
      <path
        className="st1"
        d="M293.2 344.4c1-1.1 1.5-2 2.2-2.3.9-.3 2-.2 3-.2h62.9c1.2 0 2.4-.1 3.4.3.6.2.9 1.3 1.5 2.1-4.1 1-67.3 1.2-73 .1zM293.6 352.9c.6-.6 1-1.5 1.8-1.8.9-.3 2-.2 3-.2h62.9c1.2 0 2.4-.1 3.4.3.6.2.9 1.3 1.8 2.6h-72.3l-.6-.9zM293.4 362.7c.7-1.2 1-2.4 1.7-2.6 1-.4 2.3-.3 3.4-.3h62.4c1.3 0 2.7 0 4 .3.4.1 1 1 1 1.4 0 .5-.6 1.2-1.1 1.3-.9.2-2 .2-3 .2h-63.9c-1.3.1-2.6-.1-4.5-.3z"
      />
      <path
        className="st32"
        d="M261.9 22.1c0 1.9-1.4 2.9-3.4 2.9-2.1 0-3.7-1.1-3.4-2.6.4-1.9 2.1-2.2 3.7-2.4 1.8-.1 2.8.8 3.1 2.1z"
      />
      <path
        className="st33"
        d="M193.1 21.7c3.4-1.9 5.1-2 5.8-.1.5 1.5-.2 2.6-1.6 3.2-2.1.9-3.4-.2-4.2-3.1z"
      />
      <path
        className="st34"
        d="M231.3 23c-1.8.8-3.2 1.7-4.7 1.9-.8.1-2.1-1.1-2.4-1.9-.2-.6 1-1.8 1.8-2.4 2.1-1.4 3.4 0 5.3 2.4z"
      />
      <path
        className="st23"
        d="M255 156h117.5c8.3 0 12.5 4.1 12.6 12.5v149.4c0 4.1-.8 7.9-4.2 10.7-1.9 1.5-3.9 2.5-6.4 2.3-.7-.1-1.3 0-2 0H137.6c-2.1 0-4.4-.2-6.3-1-3.7-1.5-5.5-4.7-6-8.6-.2-1.6-.2-3.3-.2-5V169.9c0-3.7.2-7.3 2.7-10.3 1.9-2.3 4.2-3.7 7.3-3.7h7c37.6.1 75.2.1 112.9.1z"
      />
      <path
        className="st35"
        d="M172.9 343.9c7.4 0 12.3 4.6 12.4 11.8.1 7.4-4.6 12.1-11.7 12.6-7.7.5-12.8-6.2-12.7-12.2.2-7.3 4.7-12.2 12-12.2z"
      />
      <path
        className="st36"
        d="M238.2 145.1c.1 2.2-1 3.7-3 3.8-1.9.2-4.1-1.7-4.1-3.5 0-1.7 1.6-3.3 3.5-3.5 2.3 0 3.5 1 3.6 3.2z"
      />
      <path
        className="st37"
        d="M259 145.2c.1 1.7-1.6 3.6-3.3 3.8-1.7.2-3.6-1.4-3.7-3.2-.2-2.4 1-3.7 3.4-3.8 2 0 3.4 1.2 3.6 3.2z"
      />
      <path
        className="st38"
        d="M357.2 451.4c-4.6-.1-8.7-3.9-8.6-8 .1-4.5 4.4-8.7 8.8-8.7 5.4 0 9.1 3.7 9.1 8.9-.1 4.7-4 8-9.3 7.8z"
      />
      <path
        className="st39"
        d="M143.4 19.9c17.3-1.3 30.8 16.4 30.9 30 .1 17.8-15.9 32.3-31.1 31.6-17.5-.8-30.9-13.5-31-31-.1-16.9 14.7-31.8 31.2-30.6z"
      />
      <path
        className="st40"
        d="M638.7 435H529.8c-1.3 0-2.7.1-4 0-4.7-.7-6.8-6.2-6.8-17.3V185.1c0-9.3 1.9-14.7 5.8-15.8 1.3-.4 2.7-.2 4-.2h219.9c1 0 2-.1 3 .1 4.3.5 7 6.7 7.4 16.9.1 2 0 4 0 5.9v219.6c0 2.4.1 4.8-.1 7.1-.5 9.6-3.2 15.6-7.3 16.3-1.3.2-2.7.1-4 .1-36.4-.1-72.7-.1-109-.1z"
      />
      <path
        className="st41"
        d="M702.6 459c15 0 30 .1 44.9-.1 4.7-.1 6.7 1 6.6 6.7-.3 10.6-.1 21.3-.1 31.9 0 6.4-1 7.4-7.6 7.4h-86.8c-1.3 0-2.7.1-4-.1-2.9-.4-4.6-2.4-4.6-5.4v-34.9c0-4.4 1.2-5.5 5.7-5.6 15.3.1 30.6.1 45.9.1zM576.1 459h45c5.5 0 6.9 1.1 6.9 6.6.1 10.8.1 21.7 0 32.5 0 5-1.9 6.9-7 6.9h-89.9c-5 0-7-1.9-7-6.9-.1-10.8-.1-21.7 0-32.5 0-4.9 1.8-6.6 6.6-6.6h45.4z"
      />
      <path
        className="st42"
        d="M134.8 40.9c-1.7 0-3.3.2-5 0-2.9-.3-4.4-2.6-3.6-5.3 2.3-7.6 13.4-13.3 21-10.7 3.2 1.1 4.9 3.4 5.8 6.3 1 3.4 0 5.1-3.2 6.9-3.2 1.6-9.5 2.8-15 2.8z"
      />
    </svg>
  )
}

export default SvgComponent
