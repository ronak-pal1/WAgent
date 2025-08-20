import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  AI-Powered Automation Platform
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Connect All Your
                  <span className="text-green-600"> Tools with AI</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Send a simple WhatsApp message and let our AI agent handle the
                  rest. Connect to email, Linear, calendar, and 10+ other tools
                  to automate your entire workflow.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-green-600 text-white px-8 py-2 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Free Trial
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-2 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-200">
                  View Integrations
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10+</div>
                  <div className="text-gray-600">Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5min</div>
                  <div className="text-gray-600">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">24/7</div>
                  <div className="text-gray-600">Automation</div>
                </div>
              </div>
            </div>

            {/* Right Content - WhatsApp Mockup */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto">
                {/* Phone Header */}
                <div className="bg-green-600 px-4 py-3 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">WAgent Bot</div>
                    <div className="text-green-100 text-sm">Online</div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 h-96 bg-gray-50">
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-gray-800">
                        Hi! I can help you with tasks across all your tools.
                      </p>
                      <span className="text-xs text-gray-500">10:30 AM</span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-green-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p>Schedule a meeting with John for tomorrow at 3pm</p>
                      <span className="text-xs text-green-100">10:31 AM</span>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-gray-800">
                        ✅ Meeting scheduled in your calendar and invitation
                        sent via email!
                      </p>
                      <span className="text-xs text-gray-500">10:31 AM</span>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      🔗 Multi-Tool Integration
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
