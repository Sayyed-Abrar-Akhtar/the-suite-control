import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrentUser } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function UseUpdateUser() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success('Account updated successfully');
      queryClient.setQueryData(['user'], user);
      queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
    // onSuccess: () => {
    //   toast.success('Account updated successfully');
    //   queryClient.invalidateQueries({
    //     queryKey: ['user'],
    //   });
    // },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateUser };
}
