import { auth } from "@/auth";
import { CreateCourseForm } from "@/components/course/create/CreateCourseForm";
import { redirect } from "@/i18n/routing";
import React from "react";

const CreateCourse = async () => {
  const session = await auth();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!session) redirect("/" as any);

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h2 className="heading">Submit your course</h2>
      </section>
      <CreateCourseForm />
    </>
  );
};

export default CreateCourse;
