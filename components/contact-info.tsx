import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Globe, Clock, FileText } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Head Office Address",
    content: "De Keyserlei 60C box 1301, 2018 Antwerp",
    color: "text-red-500",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+32-491105135",
    color: "text-green-500",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "info@atlasgreen.eu",
    color: "text-blue-500",
  },
  
]

const businessHours = [
  { day: "Monday - Saturday", hours: "9:00 AM to 5:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

const documents = ["Company Brochure", "Product Catalog", "Quality Certificates", "Registration Documents"]

export function ContactInfo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Contact Details */}
          <Card className="hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <div key={detail.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className={`h-6 w-6 ${detail.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{detail.title}</h4>
                        <p className="text-muted-foreground">{detail.content}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card className="hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <Badge variant="secondary">{schedule.hours}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Registration Info */}
          {/* <Card className="hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Company Registration</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">TAX Registration</span>
                  <Badge variant="outline">104779466200001</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Legal Status</span>
                  <Badge variant="outline">Registered under UAE Laws</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Trade License</span>
                  <Badge variant="outline">Available on Request</Badge>
                </div>
              </div>
            </CardContent>
          </Card> */}

          {/* Download Documents */}
          {/* <Card className="hover-lift">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Company Documents</h3>
              </div>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground">{doc}</span>
                    <Badge variant="secondary" className="text-xs">
                      Available on Request
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  All company documents are available upon request. Please contact us for specific documentation needs.
                </p>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}
