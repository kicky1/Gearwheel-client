import api from '@/utils/api'
import { useQuery } from '@tanstack/react-query'

export const getStaffUsers = async () => {
  const response = await api.get('staff_users/')
  return response.data
}

export const useGetStaffUsers = () => {
  const queryFN = () => getStaffUsers()
  return useQuery({
    queryKey: ['staff-users'],
    queryFn: queryFN,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: false,
  })
}
