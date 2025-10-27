'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getAdminRegistrations, getAdminStats } from '@/lib/api-calls'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, Search, LogOut, Users, TrendingUp, Globe, Building } from 'lucide-react'

interface AdminSession {
  admin: {
    id: string
    email: string
    firstName: string | null
    lastName: string | null
    role: string
  }
  sessionToken: string
}

interface Registration {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  countryOfResidence: string
  location: string
  ageRange: string
  gender: string
  joiningFromOutsideNigeria: string
  day1Attendance: string
  day2Attendance: string
  currentRole: string
  seniorityLevel: string
  organizationName: string
  sector: string
  areasOfInterest: string
  languagesSpoken: string
  socialMediaHandle: string | null
  category: string
  professionalBackground: string
  reasonsForAttending: string
  howDidYouHear: string
  accessibilityNeeds: string | null
  futureEngagement: string
  profilePhotoUrl: string | null
  registrationCode: string
  submittedAt: Date
  createdAt: Date
}

interface Stats {
  totalRegistrations: number
  recentRegistrations: number
  registrationsByDay: Array<{
    day1Attendance: string
    day2Attendance: string
    _count: { id: number }
  }>
  registrationsByCountry: Array<{
    countryOfResidence: string
    _count: { id: number }
  }>
  registrationsBySector: Array<{
    sector: string
    _count: { id: number }
  }>
  registrationsByAge: Array<{
    ageRange: string
    _count: { id: number }
  }>
}

export default function AdminDashboardPage() {
  const [adminSession, setAdminSession] = useState<AdminSession | null>(null)
  const [registrations, setRegistrations] = useState<Registration[]>([])
  // const [stats, setStats] = useState<Stats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingRegistrations, setIsLoadingRegistrations] = useState(false)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const router = useRouter()

  useEffect(() => {
    // Check for admin session
    const sessionData = localStorage.getItem('admin-session')
    if (!sessionData) {
      router.push('/admin/login')
      return
    }

    try {
      const session = JSON.parse(sessionData)
      console.log( "session", session.data)
      setAdminSession(session.data)
      loadDashboardData()
    } catch (err) {
      localStorage.removeItem('admin-session')
      router.push('/admin/login')
    }
  }, [router])

  const loadDashboardData = async () => {
    setIsLoading(true)
    setError('')

    try {
      const [registrationsResult] = await Promise.all([
        // getAdminStats(),
        getAdminRegistrations({ page: 1, limit: 50 })
      ])

      // if (statsResult.error) {
      //   setError('Failed to load statistics')
      //   return
      // }

      if (registrationsResult.error) {
        setError('Failed to load registrations')
        return
      }

      // if (statsResult.data) {
      //   setStats(statsResult.data)
      // }

      if (registrationsResult.data) {
        setRegistrations(registrationsResult.data.data.registrations)
        console.log("data: ", registrationsResult.data.data.registrations)
        setTotalPages(registrationsResult.data.data.pagination?.totalPages || 1)
      }
    } catch (err) {
      setError('An unexpected error occurred')
      console.log( "error", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = async () => {
    setIsLoadingRegistrations(true)
    setError('')

    try {
      const result = await getAdminRegistrations({
        page: 1,
        limit: 50,
        search: searchTerm
      })

      if (result.error) {
        setError('Failed to search registrations')
        return
      }

      if (result.data) {
        setRegistrations(result.data.registrations)
        setTotalPages(result.data.pagination.totalPages)
        setCurrentPage(1)
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setIsLoadingRegistrations(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin-session')
    router.push('/admin/login')
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background px-4">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {adminSession?.admin.firstName || adminSession?.admin.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-6 space-y-6">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Statistics Cards */}
        {/* {stats && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalRegistrations}</div>
                <p className="text-xs text-muted-foreground">
                  +{stats.recentRegistrations} in the last 7 days
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Day 1 Attendance</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.registrationsByDay.find(d => d.day1Attendance === 'Yes')?._count.id || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  Attending Day 1
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Day 2 Attendance</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.registrationsByDay.find(d => d.day2Attendance === 'Yes')?._count.id || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  Attending Day 2
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Top Country</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.registrationsByCountry[0]?.countryOfResidence || 'N/A'}
                </div>
                <p className="text-xs text-muted-foreground">
                  {stats.registrationsByCountry[0]?._count.id || 0} registrations
                </p>
              </CardContent>
            </Card>
          </div>
        )} */}

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Registrations</CardTitle>
            <CardDescription>
              View and search through all conference registrations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Input
                placeholder="Search by name, email, organization, or registration code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1"
              />
              <Button onClick={handleSearch} disabled={isLoadingRegistrations}>
                {isLoadingRegistrations ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Registrations Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Registration Code</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Days Attending</TableHead>
                    <TableHead>Registered</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {registrations?.map((registration) => (
                    <TableRow key={registration.id}>
                      <TableCell>
                        <Badge variant="outline">{registration.registrationCode}</Badge>
                      </TableCell>
                      <TableCell className="font-medium">
                        {registration.firstName} {registration.lastName}
                      </TableCell>
                      <TableCell>{registration.email}</TableCell>
                      <TableCell>{registration.organizationName}</TableCell>
                      <TableCell>{registration.countryOfResidence}</TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          {registration.day1Attendance === 'Yes' && (
                            <Badge variant="secondary">Day 1</Badge>
                          )}
                          {registration.day2Attendance === 'Yes' && (
                            <Badge variant="secondary">Day 2</Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {formatDate(registration.createdAt)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </p>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
