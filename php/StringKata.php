<?php

class StringKata
{
    /**
     * 
     * 
     * @param string $stringExpression
     * @return integer
     * @throws InvalidArgumentException
     * @throws UnexpectedValueException
     */
    public function add($stringExpression)
    {
        if (!is_string($stringExpression)) {
            throw new InvalidArgumentException(
                'String expression must be string!'
            );
        }
        
        $matches = preg_match("/^[\d,]*$/", $stringExpression);

        if ($matches === 0 && $stringExpression!='') {
            throw new UnexpectedValueException(
                'String parts must be integer'
            );
        }

        $digits = explode(',', $stringExpression);

        $sum = 0;
        foreach ($digits as $value) {
            $sum = $sum + $value;
           
        }

        return $sum;
    }
}