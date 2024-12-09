"use client";

import React, { useState, useActionState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { z } from "zod";
import { courseFormSchema } from "@/lib/validation";
import { Button, Input, Textarea } from "@nextui-org/react";
import { toast } from "sonner";
import { useRouter } from "@/i18n/routing";
import { createCourse } from "@/app/actions/course";

export const CreateCourseForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await courseFormSchema.parseAsync(formValues);

      const result = await createCourse(prevState, formData, pitch);

      if (result.status == "SUCCESS") {
        toast.success("Your course has been created successfully");

        router.push(`/course/${result._id}`);
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErorrs = error.flatten().fieldErrors;

        setErrors(fieldErorrs as unknown as Record<string, string>);

        toast.error("Check your inputs and try again");

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      toast.error("An unexpected error has ocurred");

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form action={formAction} className="course-form">
      <div>
        <label htmlFor="title" className="course-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="course-form_input"
          placeholder="course Title"
        />

        {errors.title && <p className="course-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="course-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="course-form_textarea"
          placeholder="course Description"
          errorMessage={errors.description}
        />

        {errors.description && (
          <p className="course-form_error">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="course-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="course-form_input"
          placeholder="course Category (Tech, Health, Education...)"
          errorMessage={errors.category}
        />

        {errors.category && (
          <p className="course-form_error">{errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="course-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="course-form_input"
          placeholder="course Image URL"
          errorMessage={errors.link}
        />

        {errors.link && <p className="course-form_error">{errors.link}</p>}
      </div>

      <div data-color-mode="light">
        <label htmlFor="pitch" className="course-form_label">
          Pitch
        </label>

        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {errors.pitch && <p className="course-form_error">{errors.pitch}</p>}
      </div>

      <Button
        type="submit"
        className="course-form_btn text-white"
        isDisabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit Your Pitch"}
        <i
          className="icon-[grommet-icons--send]"
          role="img"
          aria-hidden="true"
        ></i>
      </Button>
    </form>
  );
};
