// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.text}>This page could not be found.</p>

      <Link href="/" style={styles.button}>
        Back to Homepage
      </Link>
    </main>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#000',
    color: '#fff',
    margin: 0,
  },
  title: {
    fontSize: '3rem',
    fontWeight: 600,
    margin: 0,
    letterSpacing: '-0.05em',
  },
  text: {
    fontSize: '1rem',
    color: '#888',
    marginTop: '0.5rem',
    marginBottom: '1.5rem',
  },
  button: {
    padding: '0.6rem 1.2rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
    transition: 'opacity 0.2s ease',
  },
};
