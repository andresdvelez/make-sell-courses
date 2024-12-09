import { auth } from "@/auth";
import { CreateCourseForm } from "@/components/course/create/CreateCourseForm";
import { redirect } from "@/i18n/routing";
import React from "react";

const CreateCourse = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit your course</h1>
      </section>
      <CreateCourseForm />
    </>
  );
};

export default CreateCourse;