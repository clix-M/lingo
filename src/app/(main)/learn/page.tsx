
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const LearnPage = () => {
    return ( 
        <div className="flex flex-row-reverse gap-[48px] px-6">
            {/* para que se vea los avances del curso */}
            <StickyWrapper>
                <UserProgress 
                    activeCourse={{ title: "Spanish", imageSrc:"/es.svg"}}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>

            {/* para que se pueda hacer el scroll de la pagina */}
            <FeedWrapper>
                <Header title="Spanish" />
            </FeedWrapper>
        </div>
     );
}
 
export default LearnPage;