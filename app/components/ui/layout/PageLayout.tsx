interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <div className="flex min-h-dvh w-full">{children}</div>;
}
