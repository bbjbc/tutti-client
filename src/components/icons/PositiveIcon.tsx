import type { SVGProps } from 'react';

const PositiveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 8.28986V21C15.0217 20.8259 9.07771 20.653 3.0561 20.4777C3.04006 20.2281 3.01535 20.0212 3.01535 19.8142C3.01275 17.5931 3.03095 15.3715 3.00018 13.1504C2.99324 12.6621 3.18917 12.4165 3.63607 12.1894C5.65642 11.1626 7.65033 10.0924 9.67199 9.0677C10.0946 8.85366 10.1783 8.62181 10.1735 8.19411C10.1622 7.15712 10.1193 6.09244 10.346 5.0871C10.7231 3.41708 12.2628 2.63251 13.8072 3.16545C14.8444 3.52351 15.294 4.30451 15.4361 5.22716C15.6117 6.36346 15.6958 7.51162 15.8284 8.73931C17.5354 8.59095 19.251 8.44139 21 8.28946V8.28986ZM14.0209 10.5443C14.0209 10.2016 14.0352 9.96661 14.0187 9.73397C13.9203 8.34446 13.8354 6.95376 13.7001 5.56702C13.6581 5.13497 13.4825 4.58384 12.8969 4.67207C12.571 4.72113 12.3182 5.20303 12.0469 5.50055C11.9932 5.5595 11.9836 5.66791 11.9867 5.75258C12.0274 6.83151 12.0335 7.91321 12.1384 8.98739C12.1817 9.43011 12.1522 9.68847 11.6711 9.90964C10.7569 10.3298 9.89608 10.8453 8.99058 11.2821C8.58053 11.48 8.42622 11.711 8.43229 12.145C8.46046 14.2147 8.444 16.2851 8.44616 18.3551C8.44616 18.562 8.4648 18.769 8.47694 19.0119C12.1037 19.1171 15.6429 19.2196 19.1959 19.3225V17.1318H16.5904V15.5219H19.1964V13.3395H16.59V11.73H19.1977V10.0869C17.4799 10.2388 15.8236 10.3856 14.0209 10.545V10.5443ZM6.65077 12.5213C6.05043 12.8331 5.53288 13.0855 5.03787 13.3708C4.9243 13.436 4.82721 13.6137 4.82591 13.7403C4.81204 15.4317 4.81681 17.1231 4.81681 18.8774C5.45183 18.9066 6.02919 18.9331 6.65077 18.9616V12.5213Z"
        className="fill-current"
      />
    </svg>
  );
};

export default PositiveIcon;
