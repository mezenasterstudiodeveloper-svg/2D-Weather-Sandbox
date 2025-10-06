#version 300 es
precision highp float;

in vec4 feedback;
in vec2 deposition;
in float charge_feedback;

layout(location = 0) out vec4 feedbackOut;
layout(location = 1) out vec2 depositionOut;
layout(location = 2) out float chargeFeedbackOut;

void main() // simply pass through
{
  feedbackOut = feedback;
  depositionOut = deposition;
  chargeFeedbackOut = charge_feedback;
}