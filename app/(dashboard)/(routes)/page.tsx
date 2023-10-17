import {UserButton} from '@clerk/nextjs'


const Page = () => {
    return (
        <div>
            <UserButton
            afterSignOutUrl='/'
            />
           Page 
        </div>
    );
}

export default Page;