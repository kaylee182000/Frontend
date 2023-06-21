import { LucideProps, MessageSquare, User } from "lucide-react";
import React from "react";

const Icon = {
  user: User,
  logo: (props: LucideProps) => (
    <svg
      {...props}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xmlSpace="preserve"
    >
      {" "}
      <image
        id="image0"
        width="64"
        height="64"
        x="0"
        y="0"
        href="data:image/png;base64,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
Mjo1NTo0OCswMjowMEm/IxAAAAAASUVORK5CYII="
      />
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
  commentReply: MessageSquare,
};

export default Icon;
