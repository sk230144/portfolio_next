import type { SVGProps } from "react";

export const Icons = {
  linkedin: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  leetcode: (props: SVGProps<SVGSVGElement>) => (
     <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.406L.646 12.261a1.374 1.374 0 0 0 0 1.943l11.876 11.876a1.374 1.374 0 0 0 1.943 0l11.876-11.876a1.374 1.374 0 0 0 0-1.943L14.444.406a1.374 1.374 0 0 0-.961-.406zM18.86 16.54l-5.432 5.432-5.432-5.432 5.432-5.432 5.432 5.432zm-5.432-3.48L8 13.06l5.432 5.432L18.86 13.06l-5.432-5.432zM2.93 12.26l2.121-2.121 5.432 5.432-2.121 2.121-5.432-5.432z"></path>
    </svg>
  )
};
