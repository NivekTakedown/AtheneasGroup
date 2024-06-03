import React from 'react';
import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';
import ArticleDetails from '../utils/ArticleDetails';

function ArticlesPage() {
    return (
        <div>
            <Head />
            <div className="app">
                
                <main>
                    <Header />
                    <ArticleDetails />
                    <Footer />
                </main>
                
            </div>
        </div>
    );
}

export default ArticlesPage;