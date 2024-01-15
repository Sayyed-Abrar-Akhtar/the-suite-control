import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginAPI } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      navigate('/dashboard', { replace: true });
      queryClient.setQueryData(['user'], user.user);
    },
    // onSuccess: () => {
    //   navigate('/dashboard', { replace: true });
    // },
    onError: (err) => {
      console.log('Error', err);
      toast.error('Email or password is not correct');
    },
  });

  return { isLoading, login };
}
