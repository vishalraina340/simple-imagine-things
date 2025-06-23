
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      users: "Up to 5 users",
      popular: false,
      features: [
        "5 team members",
        "10 projects",
        "Basic AI assistance",
        "Community support",
        "5GB storage"
      ]
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For growing teams",
      users: "Up to 25 users",
      popular: true,
      features: [
        "25 team members",
        "Unlimited projects",
        "Advanced AI features",
        "Priority support",
        "100GB storage",
        "Custom integrations",
        "Analytics dashboard"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations",
      users: "Unlimited users",
      popular: false,
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Enterprise AI features",
        "Dedicated support",
        "Unlimited storage",
        "Custom integrations",
        "Advanced analytics",
        "SSO & compliance",
        "On-premise deployment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Ovam AI
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link to="/pricing" className="text-purple-600 font-medium">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your team. Start free and scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-purple-600 font-medium mt-2">{plan.users}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    {plan.name === "Free" ? "Get Started Free" : 
                     plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Can I change plans at any time?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">What happens if I exceed my user limit?</h3>
              <p className="text-gray-600">We'll notify you when you're approaching your limit and help you upgrade to accommodate your team.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Is there a free trial for paid plans?</h3>
              <p className="text-gray-600">Yes, all paid plans come with a 14-day free trial. No credit card required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ovam AI
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Empowering teams with intelligent automation and seamless collaboration.
            </p>
          </div>
          <div className="text-gray-400">
            <p>&copy; 2024 Ovam AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
