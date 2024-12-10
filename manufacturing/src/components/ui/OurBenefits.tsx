import { motion } from "framer-motion";
import { Check, MoreVertical, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { Progress } from "./progress";

export default function OurBenefits() {
  return (
    <section className="p-4">
      <div className="max-w-7xl mx-auto mt-20">
        {/* grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* grid left  */}
          {/* Stats Section */}
          <div className="space-y-6 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Total Projects
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold">1,475</span>
                        <span className="text-sm font-medium text-emerald-500 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          34%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Finished", value: 10 },
                  { label: "In Progress", value: 13 },
                  { label: "Rejected", value: 11 },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{item.label}</span>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="relative">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-2 h-32">
                    {[80, 65, 45, 75].map((height, i) => (
                      <motion.div
                        key={i}
                        className="bg-emerald-500 rounded-md"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="absolute -bottom-10 left-6 right-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="absolute right-4 top-4">
                      <MoreVertical className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          Total Projects
                        </span>
                        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                          8%
                        </span>
                      </div>
                      <div className="mt-1 text-3xl font-bold">1951+</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Increase of{" "}
                        <span className="font-medium text-emerald-500">
                          126
                        </span>{" "}
                        this month
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
          {/* grid right */}
          {/* Benefits Section */}
          <div className="space-y-6 p-6">
            <div>
              <h2 className="text-3xl font-bold leading-tight">
                Key Benefits of Our System for Your Business Efficiency
              </h2>
              <p className="mt-2 text-muted-foreground">
                Our systems boost productivity, cut costs, and drive business
                growth.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Boosting Quality with Tech",
                  description:
                    "With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards.",
                },
                {
                  title: "Optimization Production Process",
                  description:
                    "Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output.",
                },
                {
                  title: "AI-Driven Production",
                  description:
                    "Leverage the power of AI to transform your manufacturing processes, achieving faster and more effective results.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground pl-8">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
