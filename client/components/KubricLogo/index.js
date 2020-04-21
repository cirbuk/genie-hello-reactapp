import React from "react";
import styles from './style.module.scss';

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 784 121"
      version="1.1"
      viewBox="0 0 784 121"
      xmlSpace="preserve"
      className={styles.logo}
    >
      <path
        fill="#FFC708"
        d="M89.07-.4C89.07 37.93 60.2 69 24.59 69H-.34V30.32C-.34 13.36 14.3-.4 32.34-.4h56.73z"
        className="st0"
      ></path>
      <path
        fill="#715FA8"
        d="M89.07 120.66c0-38.33-28.87-69.39-64.48-69.39H-.34v38.68c0 16.97 14.63 30.72 32.68 30.72h56.73z"
        className="st1"
      ></path>
      <path
        fill="#46C3DA"
        d="M694.89 120.66c0-38.33 28.87-69.39 64.48-69.39h24.92v38.68c0 16.97-14.63 30.72-32.68 30.72h-56.72z"
        className="st2"
      ></path>
      <path
        fill="#ED3A82"
        d="M694.89-.4c0 38.33 28.87 69.39 64.48 69.39h24.92V30.32c0-16.97-14.63-30.72-32.68-30.72h-56.72z"
        className="st3"
      ></path>
      <path
        fill="#181818"
        d="M134.15 103.24a2.8 2.8 0 01-.94-2.14V19.29c0-.92.3-1.67.87-2.26.58-.58 1.35-.88 2.34-.88h12.03c.98 0 1.78.29 2.41.88.62.59.93 1.34.93 2.26V48.7l29.82-30.29c1.34-1.51 3.07-2.26 5.21-2.26h13.64c.71 0 1.36.25 1.94.75.58.5.87 1.13.87 1.88 0 .59-.22 1.09-.67 1.51l-36.36 37.95 39.04 41.6c.35.59.53 1.13.53 1.63 0 .75-.26 1.39-.8 1.89-.53.5-1.16.75-1.87.75H189.1c-1.87 0-3.21-.36-4.01-1.07-.81-.71-1.25-1.11-1.34-1.19L151.8 68.67v32.43c0 .84-.31 1.55-.93 2.14-.63.59-1.43.88-2.41.88h-12.03c-.9 0-1.66-.29-2.28-.88M234.69 96.71c-6.68-5.79-10.03-14.54-10.03-26.27V19.29c0-.92.29-1.68.87-2.26.58-.59 1.35-.88 2.34-.88h12.3c.98 0 1.78.29 2.4.88.63.58.94 1.34.94 2.26v51.15c0 6.62 1.67 11.6 5.02 14.95 3.34 3.35 8.09 5.03 14.24 5.03s10.9-1.68 14.24-5.03c3.35-3.35 5.02-8.34 5.02-14.95V19.29c0-.92.31-1.68.94-2.26.62-.59 1.43-.88 2.4-.88h12.3c.98 0 1.76.29 2.35.88.57.58.86 1.34.86 2.26v51.15c0 11.73-3.32 20.48-9.96 26.27-6.64 5.78-15.98 8.67-28.01 8.67-12.14 0-21.54-2.89-28.22-8.67M329.87 103.24c-.62-.58-.94-1.3-.94-2.14V19.29c0-.92.29-1.67.87-2.26.58-.58 1.35-.88 2.33-.88h38.77c10.43 0 18.23 2.16 23.4 6.47 5.17 4.32 7.76 10.21 7.76 17.66 0 4.35-1.13 8.07-3.41 11.12-2.27 3.06-4.93 5.25-7.95 6.6 3.74 1.59 6.9 4.19 9.49 7.79 2.58 3.6 3.88 7.71 3.88 12.32 0 7.79-2.81 14.08-8.42 18.85-5.62 4.77-13.46 7.16-23.53 7.16h-39.98c-.89 0-1.64-.29-2.27-.88m38.64-51.02c4.55 0 8.05-1.05 10.49-3.14 2.46-2.09 3.68-4.9 3.68-8.42s-1.2-6.24-3.6-8.17c-2.41-1.93-5.93-2.89-10.57-2.89h-20.72v22.62h20.72zm1.34 38.45c4.64 0 8.24-1.19 10.83-3.58s3.87-5.42 3.87-9.12c0-3.69-1.31-6.72-3.94-9.11-2.62-2.38-6.22-3.58-10.76-3.58h-22.06v25.38h22.06zM429.74 103.24a2.8 2.8 0 01-.94-2.14V19.29c0-.92.29-1.67.87-2.26.58-.59 1.35-.88 2.33-.88h34.63c10.96 0 19.54 2.38 25.74 7.16 6.19 4.78 9.29 11.56 9.29 20.36 0 6.12-1.56 11.25-4.68 15.4-3.12 4.14-7.49 7.14-13.1 8.99l19.39 32.04c.26.5.4.97.4 1.39 0 .75-.29 1.38-.86 1.88-.58.51-1.23.75-1.94.75h-12.3c-1.43 0-2.55-.31-3.34-.94-.81-.63-1.52-1.45-2.14-2.45l-17.11-29.78h-18.32v30.16c0 .84-.31 1.55-.93 2.14-.62.58-1.42.88-2.41.88h-12.3c-.9-.01-1.65-.3-2.28-.89m36.5-46.63c5.35 0 9.36-1.11 12.03-3.33 2.67-2.21 4.01-5.47 4.01-9.74 0-4.28-1.34-7.56-4.01-9.87-2.68-2.3-6.69-3.45-12.03-3.45h-18.59v26.39h18.59zM527.87 103.24a2.8 2.8 0 01-.94-2.14V19.17c0-.92.31-1.65.94-2.2.63-.55 1.38-.82 2.28-.82h12.83c.98 0 1.76.27 2.34.82.57.54.86 1.27.86 2.2v81.94c0 .84-.29 1.55-.86 2.14-.59.59-1.36.88-2.34.88h-12.83c-.9-.01-1.66-.3-2.28-.89M582.61 96.52c-6.73-5.91-10.32-14.31-10.76-25.2-.09-2.26-.14-5.94-.14-11.06 0-5.2.04-8.97.14-11.31.44-10.72 4.05-19.08 10.83-25.07 6.77-5.99 16.26-8.99 28.48-8.99 7.93 0 14.84 1.28 20.72 3.84 5.88 2.55 10.45 6.05 13.7 10.49 3.26 4.44 4.97 9.43 5.14 14.96v.25c0 .67-.28 1.24-.86 1.7-.58.46-1.23.69-1.94.69h-12.97c-1.07 0-1.87-.23-2.4-.69-.53-.46-.98-1.28-1.33-2.46-1.34-5.19-3.66-8.86-6.96-11-3.3-2.14-7.66-3.21-13.1-3.21-12.75 0-19.39 6.71-19.92 20.11-.09 2.26-.13 5.74-.13 10.44 0 4.69.04 8.25.13 10.68.53 13.41 7.17 20.11 19.92 20.11 5.35 0 9.69-1.07 13.04-3.21 3.34-2.14 5.68-5.8 7.02-10.99.35-1.17.8-1.99 1.33-2.46.53-.46 1.34-.69 2.4-.69h12.97c.8 0 1.49.25 2.07.76.58.5.83 1.13.73 1.89-.18 5.53-1.89 10.51-5.14 14.95-3.25 4.44-7.82 7.94-13.7 10.49-5.88 2.56-12.79 3.83-20.72 3.83-12.3.01-21.82-2.95-28.55-8.85"
        className="st4"
      ></path>
    </svg>
  );
}

export default Icon;