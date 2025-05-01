export const metadata = {
    title: 'About',
    description: 'This is the about page of the application.',
};


export default function AboutLayout({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}