import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  DollarSign,
  Calendar,
  FileText,
  Users,
  Building,
  Globe,
  Target,
  BarChart3,
  PieChart,
  LineChart,
  ArrowUpRight
} from "lucide-react";

export default function InvestorRelationsPage() {
  const financialHighlights = [
    {
      metric: "Revenue Growth",
      value: "245%",
      period: "Year over Year",
      trend: "up",
      description: "Significant growth across all blockchain verticals"
    },
    {
      metric: "Enterprise Clients",
      value: "150+",
      period: "Active Deployments",
      trend: "up",
      description: "Fortune 500 and mid-market enterprises"
    },
    {
      metric: "Market Presence",
      value: "14",
      period: "Industry Verticals",
      trend: "stable",
      description: "Comprehensive blockchain ecosystem coverage"
    },
    {
      metric: "Technology Patents",
      value: "25+",
      period: "Filed & Pending",
      trend: "up",
      description: "Proprietary blockchain innovations"
    }
  ];

  const recentNews = [
    {
      date: "January 20, 2025",
      title: "Bloqz Technologies Launches Bloqz Multi-Industry Platform",
      category: "Product Launch",
      summary: "Revolutionary unified blockchain ecosystem connecting all 14 industry verticals"
    },
    {
      date: "January 15, 2025",
      title: "Q4 2024 Financial Results Exceed Projections",
      category: "Financial Results",
      summary: "245% revenue growth driven by enterprise adoption and new vertical expansion"
    },
    {
      date: "December 18, 2024",
      title: "Strategic Partnership with Major Healthcare Network",
      category: "Partnership",
      summary: "RxBridge platform deployed across 500+ healthcare facilities nationwide"
    },
    {
      date: "December 5, 2024",
      title: "Cannabis Industry Compliance Milestone Achieved",
      category: "Regulatory",
      summary: "CannaLink achieves compliance certification in 12 additional states"
    }
  ];

  const upcomingEvents = [
    {
      date: "February 15, 2025",
      event: "Q1 2025 Earnings Call",
      time: "4:00 PM EST",
      type: "Virtual",
      description: "Quarterly financial results and business updates"
    },
    {
      date: "March 10-12, 2025",
      event: "Blockchain Innovation Summit",
      time: "All Day",
      type: "Las Vegas, NV",
      description: "Showcasing Bloqz platform capabilities"
    },
    {
      date: "April 8, 2025",
      event: "Annual Shareholder Meeting",
      time: "2:00 PM EST",
      type: "Hybrid",
      description: "Annual business review and strategic outlook"
    },
    {
      date: "May 20-22, 2025",
      event: "Healthcare Technology Conference",
      time: "All Day",
      type: "Chicago, IL",
      description: "RxBridge platform demonstrations and partnerships"
    }
  ];

  const keyExecutives = [
    {
      name: "Michael Rodriguez",
      title: "Chief Executive Officer",
      experience: "15+ years blockchain technology",
      background: "Former VP Technology at IBM Blockchain"
    },
    {
      name: "Sarah Chen",
      title: "Chief Technology Officer",
      experience: "12+ years enterprise software",
      background: "Lead Architect at Microsoft Azure"
    },
    {
      name: "David Thompson",
      title: "Chief Financial Officer",
      experience: "18+ years financial leadership",
      background: "Former CFO at TechCorp Industries"
    },
    {
      name: "Lisa Park",
      title: "Chief Compliance Officer",
      experience: "20+ years regulatory compliance",
      background: "Former Director at FDA Digital Health"
    }
  ];

  const investmentHighlights = [
    {
      title: "Market Leadership",
      description: "First-to-market comprehensive blockchain ecosystem spanning 14 industries",
      icon: Target,
      color: "blue"
    },
    {
      title: "Scalable Technology",
      description: "Proprietary Bloqz platform enabling rapid vertical expansion",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Regulatory Excellence",
      description: "Proven compliance across healthcare, finance, cannabis, and government sectors",
      icon: Building,
      color: "purple"
    },
    {
      title: "Enterprise Adoption",
      description: "Strong customer retention and expanding enterprise client base",
      icon: Users,
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation currentPage="investor-relations" />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-full">
                <TrendingUp className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Investor <span className="text-green-600">Relations</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive financial information, corporate governance, and strategic updates 
              for current and prospective investors in Bloqz Technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800">
                245% Revenue Growth
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800">
                150+ Enterprise Clients
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800">
                14 Industry Verticals
              </Badge>
            </div>
          </div>

          {/* Financial Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Financial Highlights
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financialHighlights.map((highlight, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="text-3xl font-bold text-green-600">{highlight.value}</div>
                      {highlight.trend === 'up' && (
                        <ArrowUpRight className="h-5 w-5 text-green-500 ml-2" />
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.metric}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{highlight.period}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Investment Highlights */}
          <Card className="mb-16 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-600 mb-4">
                Investment Highlights
              </CardTitle>
              <CardDescription className="text-lg">
                Key competitive advantages and growth drivers for long-term value creation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {investmentHighlights.map((highlight, index) => (
                  <div key={index} className="text-center">
                    <div className={`p-3 bg-${highlight.color}-100 dark:bg-${highlight.color}-900/30 rounded-full w-fit mx-auto mb-3`}>
                      <highlight.icon className={`h-6 w-6 text-${highlight.color}-600`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent News & Updates */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white mb-4">
                  Recent News & Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentNews.map((news, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {news.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {news.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{news.date}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{news.summary}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white mb-4">
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {event.event}
                        </h3>
                        <Calendar className="h-4 w-4 text-gray-500" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-2">
                        <div>{event.date}</div>
                        <div>{event.time}</div>
                        <div className="col-span-2">{event.type}</div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{event.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Executive Leadership
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyExecutives.map((executive, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                      {executive.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{executive.name}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-3">{executive.title}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">{executive.experience}</p>
                    <p className="text-xs text-gray-500">{executive.background}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Financial Documents */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 dark:text-white mb-4">
                Financial Documents & Reports
              </CardTitle>
              <CardDescription className="text-lg">
                Access quarterly reports, annual filings, and investor presentations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg mb-4">
                    <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Quarterly Reports</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Q4 2024 earnings and financial performance
                    </p>
                    <Button variant="outline" size="sm">
                      Download Q4 2024
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg mb-4">
                    <PieChart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Annual Reports</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Comprehensive annual business review
                    </p>
                    <Button variant="outline" size="sm">
                      Download 2024 Annual
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg mb-4">
                    <LineChart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Investor Presentations</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Latest investor deck and company overview
                    </p>
                    <Button variant="outline" size="sm">
                      View Presentation
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Investor Relations Contact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              For investor inquiries, financial information requests, or to schedule a meeting 
              with our investor relations team, please contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Contact Investor Relations
              </Button>
              <Button variant="outline" size="lg">
                Subscribe to Updates
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}