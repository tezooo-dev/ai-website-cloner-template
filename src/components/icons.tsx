import type { SVGProps } from "react";

/** Logo: dark-background variant — white (#F9FAF7) icon fills, semi-transparent gradient square */
export function LogoDark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 35 34"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient
          id="logoDarkGrad"
          x1="11.7852"
          y1="0.440415"
          x2="33.2579"
          y2="35.3959"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9FAF7" stopOpacity="0.12" />
          <stop offset="1" stopColor="#F9FAF7" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <rect x="0.921875" width="34" height="34" rx="6" fill="url(#logoDarkGrad)" />
      <rect x="6.5" y="20.9917" width="22.841" height="1.26895" fill="#F9FAF7" />
      <rect x="24.8984" y="16.5483" width="2.53789" height="1.26895" fill="#F9FAF7" />
      <rect x="8.44531" y="16.5483" width="2.53789" height="1.26895" fill="#F9FAF7" />
      <rect x="18.5625" y="9.5708" width="2.53789" height="1.26895" transform="rotate(90 18.5625 9.5708)" fill="#F9FAF7" />
      <rect x="24.2695" y="11.4712" width="1.26895" height="1.26895" transform="rotate(90 24.2695 11.4712)" fill="#F9FAF7" />
      <rect x="25.5352" y="10.2021" width="1.26895" height="1.26895" transform="rotate(90 25.5352 10.2021)" fill="#F9FAF7" />
      <rect width="1.26895" height="1.26895" transform="matrix(4.37114e-08 1 1 -4.37114e-08 11.5781 11.4712)" fill="#F9FAF7" />
      <rect width="1.26895" height="1.26895" transform="matrix(4.37114e-08 1 1 -4.37114e-08 10.3125 10.2021)" fill="#F9FAF7" />
      <rect x="14.1133" y="14.0103" width="7.61367" height="1.26895" fill="#F9FAF7" />
      <rect x="22.9961" y="15.2788" width="5.71273" height="1.26895" transform="rotate(90 22.9961 15.2788)" fill="#F9FAF7" />
      <rect x="14.1133" y="15.2788" width="5.71273" height="1.26895" transform="rotate(90 14.1133 15.2788)" fill="#F9FAF7" />
    </svg>
  );
}

/** Logo: light-background variant — dark (#1F2937) icon fills, semi-transparent gradient square */
export function LogoLight({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 35 34"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient
          id="logoLightGrad"
          x1="11.7852"
          y1="0.440415"
          x2="33.2579"
          y2="35.3959"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9FAF7" stopOpacity="0.12" />
          <stop offset="1" stopColor="#F9FAF7" stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <rect x="0.921875" width="34" height="34" rx="6" fill="url(#logoLightGrad)" />
      <rect x="6.5" y="20.9917" width="22.841" height="1.26895" fill="#1F2937" />
      <rect x="24.8984" y="16.5483" width="2.53789" height="1.26895" fill="#1F2937" />
      <rect x="8.44531" y="16.5483" width="2.53789" height="1.26895" fill="#1F2937" />
      <rect x="18.5625" y="9.5708" width="2.53789" height="1.26895" transform="rotate(90 18.5625 9.5708)" fill="#1F2937" />
      <rect x="24.2695" y="11.4712" width="1.26895" height="1.26895" transform="rotate(90 24.2695 11.4712)" fill="#1F2937" />
      <rect x="25.5352" y="10.2021" width="1.26895" height="1.26895" transform="rotate(90 25.5352 10.2021)" fill="#1F2937" />
      <rect width="1.26895" height="1.26895" transform="matrix(4.37114e-08 1 1 -4.37114e-08 11.5781 11.4712)" fill="#1F2937" />
      <rect width="1.26895" height="1.26895" transform="matrix(4.37114e-08 1 1 -4.37114e-08 10.3125 10.2021)" fill="#1F2937" />
      <rect x="14.1133" y="14.0103" width="7.61367" height="1.26895" fill="#1F2937" />
      <rect x="22.9961" y="15.2788" width="5.71273" height="1.26895" transform="rotate(90 22.9961 15.2788)" fill="#1F2937" />
      <rect x="14.1133" y="15.2788" width="5.71273" height="1.26895" transform="rotate(90 14.1133 15.2788)" fill="#1F2937" />
    </svg>
  );
}

/** Logo mark: wide 35×18 variant with #CFD3CF fills — default nav/mobile mark */
export function LogoMarkWhite({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="18"
      viewBox="0 0 35 18"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="0.820312" y="15.6016" width="33.7188" height="1.77441" fill="#CFD3CF" />
      <rect x="12.9531" y="5.9043" width="9.45312" height="1.77441" fill="#CFD3CF" />
      <rect x="27.1172" y="10.209" width="3.54688" height="1.77441" fill="#CFD3CF" />
      <rect x="4.85938" y="10.209" width="3.54688" height="1.77441" fill="#CFD3CF" />
      <rect x="18.5469" width="3.54688" height="1.77441" transform="rotate(90 18.5469 0)" fill="#CFD3CF" />
      <rect x="26.8438" y="3.17871" width="1.77" height="1.77441" transform="rotate(90 26.8438 3.17871)" fill="#CFD3CF" />
      <rect width="1.77" height="1.77441" transform="matrix(4.37114e-08 1 1 -4.37114e-08 8.74219 3.17871)" fill="#CFD3CF" />
      <rect x="28.6094" y="1.41797" width="1.77" height="1.77441" transform="rotate(90 28.6094 1.41797)" fill="#CFD3CF" />
      <rect width="1.77" height="1.77441" transform="matrix(4.37114e-08 1 1 -4.37114e-08 6.96875 1.41797)" fill="#CFD3CF" />
      <rect x="24.25" y="7.5957" width="9.60693" height="1.77441" transform="rotate(90 24.25 7.5957)" fill="#CFD3CF" />
      <rect x="13.0469" y="7.63086" width="9.60693" height="1.77441" transform="rotate(90 13.0469 7.63086)" fill="#CFD3CF" />
    </svg>
  );
}

/** Pixel-art arrow used in CTA buttons — animates with slideOut on group-hover */
export function ArrowIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="10"
      viewBox="0 0 7 10"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="3.94922" y="4.29102" width="1.41526" height="1.41526" fill="currentColor" />
      <rect x="1.13281" y="1.47021" width="1.41526" height="1.41526" fill="currentColor" />
      <rect x="1.13281" y="7.11426" width="1.41526" height="1.41526" fill="currentColor" />
      <rect x="2.53125" y="2.87549" width="1.41526" height="4.24579" fill="currentColor" />
    </svg>
  );
}

/** LinkedIn logo */
export function LinkedInIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M3.72592 4.58458H0.8125V13.8753H3.72592V4.58458Z" fill="currentColor" />
      <path
        d="M11.6066 4.38334C11.4992 4.36991 11.385 4.3632 11.2709 4.35649C9.63968 4.28936 8.72001 5.25602 8.39779 5.67222C8.31052 5.78634 8.27024 5.85347 8.27024 5.85347V4.61158H5.48438V13.9023H8.27024H8.39779C8.39779 12.9558 8.39779 12.0159 8.39779 11.0694C8.39779 10.5592 8.39779 10.0491 8.39779 9.53887C8.39779 8.90786 8.3508 8.23656 8.66631 7.65925C8.93483 7.17592 9.41815 6.93425 9.9619 6.93425C11.573 6.93425 11.6066 8.39096 11.6066 8.52522C11.6066 8.53193 11.6066 8.53865 11.6066 8.53865V13.9426H14.52V7.88078C14.52 5.80648 13.4661 4.58473 11.6066 4.38334Z"
        fill="currentColor"
      />
      <path
        d="M2.26881 3.38332C3.20308 3.38332 3.96047 2.62594 3.96047 1.69166C3.96047 0.757382 3.20308 0 2.26881 0C1.33453 0 0.577148 0.757382 0.577148 1.69166C0.577148 2.62594 1.33453 3.38332 2.26881 3.38332Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** X (Twitter) logo */
export function XIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M11.453 1.18999H13.5614L8.9551 6.45467L14.374 13.6187H10.131L6.8078 9.27376L3.00524 13.6187H0.895543L5.82242 7.98755L0.624023 1.18999H4.97472L7.97864 5.16145L11.453 1.18999ZM10.713 12.3567H11.8813L4.3399 2.3857H3.08619L10.713 12.3567Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Minimal clock icon — used in hero NYC time display */
export function ClockIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="5.87891" cy="5.87451" r="5.275" stroke="#FEFFFC" strokeWidth="1.2" />
      <path
        d="M5.87891 4.84131L5.87891 0.659882"
        stroke="#FEFFFC"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Pixel-art chat bubble — used in Cofounder section notification mock */
export function ChatIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="8.45312" y="0.150391" width="10.9594" height="2.05714" fill="#F3F5F2" />
      <rect x="10.2656" y="17.1934" width="19.3555" height="2.05714" fill="#F3F5F2" />
      <rect x="19.3047" y="2.09375" width="4.29317" height="2.05714" fill="#F3F5F2" />
      <rect x="19.3047" y="15.1543" width="4.29317" height="2.05714" fill="#F3F5F2" />
      <rect x="23.5078" y="13.1523" width="4.29317" height="8.16064" fill="#F3F5F2" />
      <rect x="4.25" y="2.09375" width="4.29317" height="2.05714" fill="#F3F5F2" />
      <rect x="2.27344" y="6.13086" width="6.98885" height="2.05714" transform="rotate(90 2.27344 6.13086)" fill="#F3F5F2" />
      <rect x="8.28906" y="17.1152" width="6.40126" height="2.05714" transform="rotate(90 8.28906 17.1152)" fill="#F3F5F2" />
      <rect x="29.7656" y="6.13086" width="7.29907" height="4.2309" transform="rotate(90 29.7656 6.13086)" fill="#F3F5F2" />
      <rect x="31.7031" y="8.51367" width="8.71088" height="4.2309" transform="rotate(90 31.7031 8.51367)" fill="#F3F5F2" />
      <rect x="2.21875" y="4.08398" width="2.05203" height="2.05714" fill="#F3F5F2" />
      <rect x="2.21875" y="13.0801" width="2.05203" height="2.05714" fill="#F3F5F2" />
      <rect x="4.17188" y="15.0234" width="2.05203" height="2.05714" fill="#F3F5F2" />
      <rect x="8.28125" y="19.2266" width="2.05203" height="2.05714" fill="#F3F5F2" />
      <rect x="23.5625" y="4.08398" width="2.05203" height="2.05714" fill="#F3F5F2" />
      <rect x="25.75" y="21.293" width="2.05203" height="2.05714" fill="#F3F5F2" />
      <rect x="16.75" y="8.6875" width="2.05203" height="2.05714" fill="#F3F5F2" />
      <rect x="12.6953" y="8.6875" width="2.05203" height="2.05714" fill="#F3F5F2" />
      <rect x="8.45312" y="8.6875" width="2.05203" height="2.05714" fill="#F3F5F2" />
    </svg>
  );
}

/** Two-star sparkle — used in Cofounder section header badge */
export function SparkleIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M4.89062 2.42285C5.43642 3.48203 6.2994 4.34454 7.3584 4.89062C6.2995 5.43653 5.43653 6.2995 4.89062 7.3584C4.34454 6.2994 3.48203 5.43642 2.42285 4.89062C3.48213 4.34465 4.34465 3.48213 4.89062 2.42285Z"
        stroke="white"
      />
      <path
        d="M12.322 6.72205C13.3455 8.92879 15.1212 10.7044 17.3279 11.7279C15.1212 12.7514 13.3455 14.5271 12.322 16.7338C11.2985 14.5271 9.52291 12.7513 7.31616 11.7279C9.52294 10.7044 11.2985 8.92882 12.322 6.72205Z"
        stroke="white"
        strokeWidth="1.4"
      />
    </svg>
  );
}
