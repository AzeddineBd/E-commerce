// src/hooks/useStepForm.js
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export const useStepForm = (schema, nextPath) => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("✅ Validated:", data);
    navigate(nextPath); // بدل goToNextStep، ننتقل مباشرة
  };

  return { ...form, onSubmit };
};
