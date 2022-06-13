import React from 'react';

const Blogs = () => {
    return (
        <div className='grid md:grid-cols-1 '>
            <div className=" first-question  p-20">
                <h3 className='text-center'>Difference between authorization and authentication</h3>
                <p className='text-justify mt-5'><span className="text-blue-700 mr-1">Answer:</span> Authentication verifies who the user is. On the other hand, authorization determines what resources a user can access. Authentication is the first step of a good identity and access management process. But authorization always takes place after authentication. Authentication is visible to and partially changeable by the user whereas authorization isn’t visible to or changeable by the user.</p>
            </div>
            <div className=" second-question p-20">
                <h3 className='text-center'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='text-justify mt-5'><span className="text-blue-700 mr-1">Answer:</span>STYTCH is a staunch supporter of password-less authentication. Ory brings complete user experience control with its headless user authentication management. Supabase calls itself an open-source Firebase alternative. Okta is again a flagbearer of password-less security. However, you can ask for the strongest passwords with Okta as well.</p>

            </div>
            <div className=" third-question p-20">
                <h3 className='text-center'>What other services does firebase provide other than authentication</h3>
                <p className='text-justify mt-5'><span className="text-blue-700 mr-1">Answer:</span>Firebase provides Realtime data,Ready-made api,Built in security at the data node level, File storage backed by Google Cloud Storage,Treat data as streams to build highly scalable applications.</p>

            </div>

        </div>
    );
};

export default Blogs;