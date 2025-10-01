import ConferenceRegistrationForm from '@/components/ConferenceRegistrationForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton={false} variant="solid" />
      <ConferenceRegistrationForm />
      <Footer />
    </div>
  )
}
