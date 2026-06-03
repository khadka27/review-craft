import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { title, description, targetType, reviewType, reviewCount, reviewLength, language } = await req.json();

    const apiKey = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: 'DeepSeek API key is not configured.' }, { status: 500 });
    }

    const prompt = `You are an expert review writer.

Generate ${reviewCount} realistic and unique reviews.

Context:
Title: ${title}
Description: ${description}

Review Type: ${reviewType}
Target Type: ${targetType}
Language: ${language}
Length: ${reviewLength}

Rules:
- Generate exactly ${reviewCount} reviews.
- Each review must be different.
- Write each review in the specified Language: ${language}.
- Include a rating between 1 and 5.
- For each review, generate a realistic reviewer name that is culturally authentic for the region/country where ${language} is primarily spoken. For example: Hindi → Indian names, Japanese → Japanese names, Arabic → Arabic names, French → French names, etc.
- Do not repeat sentences.
- Return JSON only.

Output Format:

{
  "reviews": [
    {
      "rating": 5,
      "reviewerName": "culturally authentic name for ${language} language",
      "review": "Review text in ${language}..."
    }
  ]
}`;

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('DeepSeek API Error:', errorText);
      return NextResponse.json({ error: `API Error: ${response.statusText}` }, { status: response.status });
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;
    
    if (!content) {
      return NextResponse.json({ error: 'Empty response from DeepSeek API.' }, { status: 500 });
    }

    let parsedContent;
    try {
      parsedContent = JSON.parse(content);
    } catch (parseError) {
      console.error('Failed to parse JSON:', content);
      return NextResponse.json({ error: 'Invalid JSON received from DeepSeek API.' }, { status: 500 });
    }

    return NextResponse.json(parsedContent);
  } catch (error) {
    console.error('Error generating reviews:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
