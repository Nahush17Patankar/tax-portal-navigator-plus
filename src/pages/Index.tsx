import { useState } from "react";
import { Search, Phone, Globe, Minus, Plus, Moon, Sun, LogIn, UserPlus, Menu, X, ExternalLink, Play, AlertTriangle, Bell, FileText, Video, HelpCircle, ChevronRight, CreditCard, Download, Eye, Shield, Calculator, Receipt, Building, Users, MessageSquare, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const adjustFontSize = (adjustment: number) => {
    const newSize = Math.max(12, Math.min(20, fontSize + adjustment));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`} style={{ fontSize: `${fontSize}px` }}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Top Navigation Bar */}
        <div className="bg-blue-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/placeholder.svg" alt="Income Tax Logo" className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">e-Filing Anywhere, Anytime</span>
                <span className="text-xs font-light">Income Tax Department</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Call Us: 1800-180-1961</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <select className="bg-transparent text-white border-none text-sm">
                  <option value="en">English</option>
                  <option value="hi">हिंदी</option>
                </select>
              </div>
              
              {/* Font Size Controls */}
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => adjustFontSize(-2)}
                  className="text-white hover:bg-blue-700 p-1 h-8"
                >
                  A-
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFontSize(16)}
                  className="text-white hover:bg-blue-700 p-1 h-8"
                >
                  A
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => adjustFontSize(2)}
                  className="text-white hover:bg-blue-700 p-1 h-8"
                >
                  A+
                </Button>
              </div>
              
              {/* Dark/Light Mode Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="text-white hover:bg-blue-700 p-2 h-8"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              
              {/* Auth Buttons */}
              <Button variant="outline" size="sm" className="text-blue-600 border-white hover:bg-white">
                <LogIn className="w-4 h-4 mr-1" />
                Login
              </Button>
              <Button variant="outline" size="sm" className="text-blue-600 border-white hover:bg-white">
                <UserPlus className="w-4 h-4 mr-1" />
                Register
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="bg-blue-50 dark:bg-gray-700 border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <nav className="hidden md:flex space-x-8 py-3">
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Home</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Individual</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Company</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Non-Company</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Tax Professional</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Downloads</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Help</a>
              </nav>
              
              <div className="flex items-center space-x-4 py-3">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="pr-10 w-64"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              <Button
                variant="ghost"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
            
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden pb-4">
                <nav className="flex flex-col space-y-2">
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 py-2">Home</a>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 py-2">Individual</a>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 py-2">Company</a>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 py-2">Non-Company</a>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 py-2">Tax Professional</a>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 py-2">Downloads</a>
                  <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 py-2">Help</a>
                </nav>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar - Quick Links */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-blue-600">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="#" className="flex items-center justify-between text-sm hover:text-blue-600 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span>File ITR</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-sm hover:text-blue-600 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-green-600" />
                      <span>View Form 26AS</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-sm hover:text-blue-600 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <Search className="w-4 h-4 text-orange-600" />
                      <span>Track Refund Status</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-sm hover:text-blue-600 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-purple-600" />
                      <span>e-Verify Return</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-sm hover:text-blue-600 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-gray-600" />
                      <span>Download Forms</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-sm hover:text-blue-600 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4 text-indigo-600" />
                      <span>PAN Services</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-sm hover:text-blue-600 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-red-600" />
                      <span>TAN Services</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-sm hover:text-blue-600 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <Calculator className="w-4 h-4 text-teal-600" />
                      <span>Tax Calculator</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-sm hover:text-blue-600 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <Receipt className="w-4 h-4 text-yellow-600" />
                      <span>TDS Certificate</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-sm hover:text-blue-600 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-pink-600" />
                      <span>Taxpayer Services</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-sm hover:text-blue-600 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-cyan-600" />
                      <span>Grievance Portal</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a href="#" className="flex items-center justify-between text-sm hover:text-blue-600 py-2 border-b">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-emerald-600" />
                      <span>User Manual</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-3 space-y-6">
              {/* Scam Alert Banner */}
              <Card className="border-red-200 bg-red-50 dark:bg-red-900/20">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-red-800 dark:text-red-300">Scam Alert!</h3>
                      <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                        Beware of fraudulent emails, SMS, and phone calls asking for personal information. 
                        Income Tax Department never asks for passwords, PIN, or OTP through email or SMS.
                      </p>
                      <Button variant="link" className="text-red-600 p-0 h-auto mt-2">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Latest Updates */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="w-5 h-5 text-blue-600" />
                    <span>Latest Updates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3 pb-3 border-b">
                    <Badge variant="secondary" className="mt-1">New</Badge>
                    <div>
                      <h4 className="font-medium">Extension of due date for filing ITR for AY 2023-24</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Due date extended to 31st December 2024 for certain categories of taxpayers.
                      </p>
                      <span className="text-xs text-gray-500">Posted on: 15 Dec 2024</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 pb-3 border-b">
                    <FileText className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium">New TDS rates for FY 2024-25</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Updated TDS rates applicable from 1st April 2024.
                      </p>
                      <span className="text-xs text-gray-500">Posted on: 10 Dec 2024</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Bell className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-medium">e-Filing portal maintenance scheduled</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Portal will be unavailable on 20th December 2024 from 11:00 PM to 6:00 AM.
                      </p>
                      <span className="text-xs text-gray-500">Posted on: 8 Dec 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Things to Know */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                    <span>Things to Know</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Video className="w-4 h-4 mr-2 text-blue-600" />
                        How-to Videos
                      </h4>
                      <div className="space-y-3">
                        <a href="#" className="flex items-center space-x-2 text-sm hover:text-blue-600">
                          <Play className="w-4 h-4" />
                          <span>How to file ITR online</span>
                        </a>
                        <a href="#" className="flex items-center space-x-2 text-sm hover:text-blue-600">
                          <Play className="w-4 h-4" />
                          <span>How to link PAN with Aadhaar</span>
                        </a>
                        <a href="#" className="flex items-center space-x-2 text-sm hover:text-blue-600">
                          <Play className="w-4 h-4" />
                          <span>How to download Form 16</span>
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2 text-orange-600" />
                        Awareness Videos
                      </h4>
                      <div className="space-y-3">
                        <a href="#" className="flex items-center space-x-2 text-sm hover:text-blue-600">
                          <Play className="w-4 h-4" />
                          <span>Avoid tax-related frauds</span>
                        </a>
                        <a href="#" className="flex items-center space-x-2 text-sm hover:text-blue-600">
                          <Play className="w-4 h-4" />
                          <span>Understanding TDS deductions</span>
                        </a>
                        <a href="#" className="flex items-center space-x-2 text-sm hover:text-blue-600">
                          <Play className="w-4 h-4" />
                          <span>Income tax saving options</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-blue-300">File ITR</a></li>
                  <li><a href="#" className="hover:text-blue-300">Track Refund</a></li>
                  <li><a href="#" className="hover:text-blue-300">View Form 26AS</a></li>
                  <li><a href="#" className="hover:text-blue-300">Download Forms</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-blue-300">PAN Services</a></li>
                  <li><a href="#" className="hover:text-blue-300">TAN Services</a></li>
                  <li><a href="#" className="hover:text-blue-300">e-Verify</a></li>
                  <li><a href="#" className="hover:text-blue-300">Grievance</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Help & Support</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-blue-300">FAQ</a></li>
                  <li><a href="#" className="hover:text-blue-300">User Manual</a></li>
                  <li><a href="#" className="hover:text-blue-300">Contact Us</a></li>
                  <li><a href="#" className="hover:text-blue-300">Feedback</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-2 text-sm">
                  <p>Helpline: 1800-180-1961</p>
                  <p>Email: helpdesk@incometax.gov.in</p>
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2024 Income Tax Department, Government of India. All rights reserved.</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="hover:text-blue-300">Privacy Policy</a>
                <a href="#" className="hover:text-blue-300">Terms of Use</a>
                <a href="#" className="hover:text-blue-300">Accessibility</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
