// src/hooks/useStepForm.js
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";

export const useStepForm = (schema, nextPath) => {
  const navigate = useNavigate();
  const { setUserInfo } = useCart();

  const form = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setUserInfo(data);
    navigate(nextPath); // بدل goToNextStep، ننتقل مباشرة
  };

  return { ...form, onSubmit };
};
