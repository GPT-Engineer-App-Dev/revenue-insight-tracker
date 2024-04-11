import React, { useState } from "react";
import { Box, Flex, Text, VStack, HStack, IconButton, useBreakpointValue, Spacer, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaChartBar, FaDollarSign, FaShoppingCart, FaBars } from "react-icons/fa";

const metrics = [
  { id: "sales", label: "Sales", icon: FaShoppingCart, value: "1,024", change: "12.4%" },
  { id: "revenue", label: "Revenue", icon: FaDollarSign, value: "$89.4k", change: "15.2%" },
  // Add more metrics as needed
];

const Index = () => {
  const [selectedMetric, setSelectedMetric] = useState(metrics[0].id);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const cardBg = useColorModeValue("gray.100", "gray.700");

  const renderMetricCard = (metric) => (
    <Stat p={5} shadow="md" border="1px solid" borderColor={useColorModeValue("gray.200", "gray.600")} bg={cardBg} borderRadius="md" key={metric.id} onClick={() => setSelectedMetric(metric.id)} cursor="pointer">
      <Flex alignItems="center">
        <Box as={metric.icon} size="3em" />
        <Box ml={4}>
          <StatLabel>{metric.label}</StatLabel>
          <StatNumber>{metric.value}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {metric.change}
          </StatHelpText>
        </Box>
      </Flex>
    </Stat>
  );

  return (
    <Box>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg={useColorModeValue("gray.200", "gray.900")} color="white">
        <IconButton display={{ base: "flex", md: "none" }} icon={<FaBars />} onClick={() => {}} variant="outline" aria-label="Open Menu" />
        <HStack spacing={8} alignItems="center" display={{ base: "none", md: "flex" }}>
          {metrics.map((metric) => (
            <Box key={metric.id} p={2} cursor="pointer" borderRadius="md" bg={selectedMetric === metric.id ? "cyan.500" : "transparent"} color={selectedMetric === metric.id ? "white" : "inherit"} onClick={() => setSelectedMetric(metric.id)}>
              <HStack>
                <Box as={metric.icon} />
                <Text>{metric.label}</Text>
              </HStack>
            </Box>
          ))}
        </HStack>
        <Spacer />
        {/* Add more navigation items if needed */}
      </Flex>

      <Box p={5}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {metrics.map(renderMetricCard)}
        </SimpleGrid>

        {/* Add charts and graphs here based on the selectedMetric */}
        <Box mt={10}>
          <Text fontSize="2xl" mb={5}>
            {metrics.find((metric) => metric.id === selectedMetric)?.label} Overview
          </Text>
          {/* Placeholder for chart/graph */}
          <Box p={10} shadow="md" borderWidth="1px" borderRadius="md" bg={cardBg} height="300px">
            {/* Chart or graph should be rendered here based on the selectedMetric */}
            <Text align="center">Chart/Graph for {selectedMetric}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
