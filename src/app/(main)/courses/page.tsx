import { getCourses } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
    const courses = await getCourses();
    return (
        <div className="">
            <h1 className="text-2xl font-bold text-neutral-700 gap-4">
                Laguages Courses
            </h1>
            <List courses={courses} activeCourseId={1}/>
        </div>
    );
}
 
export default CoursesPage;