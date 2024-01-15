import { useMutation } from '@tanstack/react-query';
import { signup as signupAPI } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        'Account created successfully! Please verify the new account from user email'
      );
    },
  });
  return { isLoading, signup };
}
